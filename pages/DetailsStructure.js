import React from 'react';
import { Text, View, StyleSheet, ScrollView, SafeAreaView, Share, TouchableOpacity, Image } from 'react-native';

export default class PeopleDetailPage extends React.Component {
	AffichageCondionelAge(age_max2, age_min2) {

		if (age_min2 != 0 && age_max2 != 999) {
			return <Text >Tranche d'age: {age_min2}, {age_max2}</Text>
		}
		else if (age_max2 != 999) {
			return <Text>Age maximum : {age_max2}</Text>
		}
		else if (age_min2 != 0) {
			return <Text >Age minimum : {age_min2}</Text>
		}
		else {
			return <Text >Sans limite d'age</Text>
		}

	}

	AffichageCondionelNULL(condition) {
		if (condition != null) {
			return <Text>{condition}</Text>
		}
	}
	AffichageCondionelInterpretariat(condition) {
		if (condition != null) {
			return <Text>interpretariat :{condition}</Text>
		}
	}
	AffichageCondionelSE(condition) {
		if (condition != null) {
			return <Text>Aide socio-éducative :{condition}</Text>
		}
	}

	AffichageCondionelService(interpretariat, ConsultSpe1, ServiceEnPlus1, SocioEducatif, SoinsInfirmiers, ConsultSpe2, ServiceEnPlus2) {
		return (
			<View>
				<View>{this.AffichageCondionelInterpretariat(interpretariat)}</View>
				<View>{this.AffichageCondionelNULL(ConsultSpe1)}</View>
				<View>{this.AffichageCondionelNULL(SoinsInfirmiers)}</View>
				<View>{this.AffichageCondionelSE(SocioEducatif)}</View>
				<View>{this.AffichageCondionelNULL(ServiceEnPlus1)}</View>
				<View>{this.AffichageCondionelNULL(ConsultSpe2)}</View>
				<View>{this.AffichageCondionelNULL(ServiceEnPlus2)}</View>
			</View>
		)
	}

	_shareStructure() {
		const { person } = this.props.navigation.state.params;
		Share.share({ message: `${person.nom} - ${person.adresse} - ${person.tel}` }) //ajouter tel, acces ect !
	}

	_displayFloatingActionButton() {
		const { person } = this.props.navigation.state.params;
		if (person != undefined && Platform.OS === 'android') { // Uniquement sur Android et lorsque le film est chargé
			return (
				<TouchableOpacity
					style={style.share_touchable_floatingactionbutton}
					onPress={() => this._shareStructure()}>
					<Image
						style={style.share_image}
						// a gerer sinon inutile !!
						source={require('./images/ic_share.png')} />
				</TouchableOpacity>
			)
		}
	}

	render() {
		const { person } = this.props.navigation.state.params;
		return (
			<SafeAreaView style={style.container4}>
				<View>
					<ScrollView style={style.scrollview_container}>
						<View style={style.container}>
							<View style={style.detailContainer}>
								<View style={style.detailTitle}>
									<Text style={[style.cell, style.label]}>{person.nom}</Text>
									<Text style={[style.cell, style.content]}>{person.adresse}</Text>
								</View>
								<View style={style.detailLine}>
									<Text style={[style.cell, style.label]}>{"Infos pratiques"}</Text>
									<Text style={[style.cell, style.content]}>{person.tel}</Text>
									<Text style={[style.cell, style.content]}>{person.acces}</Text>
									<Text style={[style.cell, style.content]}>{this.AffichageCondionelNULL(person.horaires)}</Text>
								</View>
								<View style={style.detailLine}>
									<Text style={[style.cell, style.label]}>{"Pour qui ?"}</Text>
									<Text style={[style.cell, style.content]}>{person.public_cible}</Text>
									<Text style={[style.cell, style.content]}>{this.AffichageCondionelAge(person.age_max, person.age_min)}</Text>

								</View>
								<View style={style.detailContainer2}>
									<Text style={[style.cell, style.label]}>{"Services proposés"}</Text>
									<Text style={[style.cell, style.content]}>{person.description}</Text>
									<View style={{ flex: 1, flexWrap: 'wrap' }}>{this.affichageServiceMedG(person.medG, person.droitsMedG, person.sans_rdvMedG, person.sur_rdvMedG, person.equipe_mobileMedG)}</View>
									<View style={{ flex: 1, flexWrap: 'wrap' }}>{this.affichageServiceDentaire(person.Dentaire, person.droitsDentaire, person.sans_rdvDentaire, person.sur_rdvDentaire, person.equipe_mobileDentaire)}</View>
									<View style={{ flex: 1, flexWrap: 'wrap' }}>{this.affichageServiceSoinsinfirmiers(person.Soinsinfirmiers, person.droitsSoinsinfirmiers, person.sans_rdvSoinsinfirmiers, person.sur_rdvSoinsinfirmiers, person.equipe_mobileSoinsinfirmiers)}</View>
									<View style={{ flex: 1, flexWrap: 'wrap' }}>{this.affichageServiceLaboratoire(person.Laboratoire, person.droitsLaboratoire, person.sans_rdvLaboratoire, person.sur_rdvLaboratoire, person.equipe_mobileLaboratoire)}</View>
									<View style={{ flex: 1, flexWrap: 'wrap' }}>{this.affichageServiceDepistage(person.Depistage, person.droitsDepistage, person.sans_rdvDepistage, person.sur_rdvDepistage, person.equipe_mobileDepistage)}</View>
									<View style={{ flex: 1, flexWrap: 'wrap' }}>{this.affichageServiceImagerieMed(person.ImagerieMed, person.droitsImagerieMed, person.sans_rdvImagerieMed, person.sur_rdvImagerieMed, person.equipe_mobileImagerieMed)}</View>
									<View style={{ flex: 1, flexWrap: 'wrap' }}>{this.affichageServiceTraitement(person.Traitement, person.droitsTraitement, person.sans_rdvTraitement, person.sur_rdvTraitement, person.equipe_mobileTraitement)}</View>
									<View style={{ flex: 1, flexWrap: 'wrap' }}>{this.affichageServicePsychiatrique(person.Psychiatrique, person.droitsPsychiatrique, person.sans_rdvPsychiatrique, person.sur_rdvPsychiatrique, person.equipe_mobilePsychiatrique)}</View>
									<View style={{ flex: 1, flexWrap: 'wrap' }}>{this.affichageServicePsychologue(person.Psychologue, person.droitsPsychologue, person.sans_rdvPsychologue, person.sur_rdvPsychologue, person.equipe_mobilePsychologue)}</View>
									<View style={{ flex: 1, flexWrap: 'wrap' }}>{this.affichageServiceTraitementPsychiatrique(person.TraitementPsychiatrique, person.droitsTraitementPsychiatrique, person.sans_rdvTraitementPsychiatrique, person.sur_rdvTraitementPsychiatrique, person.equipe_mobileTraitementPsychiatrique)}</View>
									<View style={{ flex: 1, flexWrap: 'wrap' }}>{this.affichageServiceConsultationAddictologie(person.ConsultationAddictologie, person.droitsConsultationAddictologie, person.sans_rdvConsultationAddictologie, person.sur_rdvConsultationAddictologie, person.equipe_mobileConsultationAddictologie)}</View>
									<View style={{ flex: 1, flexWrap: 'wrap' }}>{this.affichageServicedelivranceTraitement(person.delivranceTraitement, person.droitsdelivranceTraitement, person.sans_rdvdelivranceTraitement, person.sur_rdvdelivranceTraitement, person.equipe_mobiledelivranceTraitement)}</View>
									<View style={{ flex: 1, flexWrap: 'wrap' }}>{this.affichageServiceMethadone(person.Methadone, person.droitsMethadone, person.sans_rdvMethadone, person.sur_rdvMethadone, person.equipe_mobileMethadone)}</View>
									<View style={{ flex: 1, flexWrap: 'wrap' }}>{this.affichageServiceSubutex(person.Subutex, person.droitsSubutex, person.sans_rdvSubutex, person.sur_rdvSubutex, person.equipe_mobileSubutex)}</View>
									<View style={{ flex: 1, flexWrap: 'wrap' }}>{this.affichageServicePsychotropes(person.Psychotropes, person.droitsPsychotropes, person.sans_rdvPsychotropes, person.sur_rdvPsychotropes, person.equipe_mobilePsychotropes)}</View>
									<View style={{ flex: 1, flexWrap: 'wrap' }}>{this.affichageServiceConsultSociales(person.ConsultSociales, person.droitsConsultSociales, person.sans_rdvConsultSociales, person.sur_rdvConsultSociales, person.equipe_mobileConsultSociales)}</View>
									<View style={{ flex: 1, flexWrap: 'wrap' }}>{this.affichageServiceSocioEducatif(person.SocioEducatif, person.droitsSocioEducatif, person.sans_rdvSocioEducatif, person.sur_rdvSocioEducatif, person.equipe_mobileSocioEducatif)}</View>
									<View style={{ flex: 1, flexWrap: 'wrap' }}>{this.affichageServiceDomiciliation(person.Domiciliation, person.droitsDomiciliation, person.sans_rdvDomiciliation, person.sur_rdvDomiciliation, person.equipe_mobileDomiciliation)}</View>
									<View style={{ flex: 1, flexWrap: 'wrap' }}>{this.affichageServiceJuridique(person.Juridique, person.droitsJuridique, person.sans_rdvJuridique, person.sur_rdvJuridique, person.equipe_mobileJuridique)}</View>
									<View style={{ flex: 1, flexWrap: 'wrap' }}>{this.affichageServiceHebergement(person.Hebergement, person.droitsHebergement, person.sans_rdvHebergement, person.sur_rdvHebergement, person.equipe_mobileHebergement)}</View>
									<View style={{ flex: 1, flexWrap: 'wrap' }}>{this.affichageServiceRepas(person.Repas, person.droitsRepas, person.sans_rdvRepas, person.sur_rdvRepas, person.equipe_mobileRepas)}</View>
									<View style={{ flex: 1, flexWrap: 'wrap' }}>{this.affichageServiceDouche(person.Douche, person.droitsDouche, person.sans_rdvDouche, person.sur_rdvDouche, person.equipe_mobileDouche)}</View>
									<View style={{ flex: 1, flexWrap: 'wrap' }}>{this.affichageServiceLaverie(person.Laverie, person.droitsLaverie, person.sans_rdvLaverie, person.sur_rdvLaverie, person.equipe_mobileLaverie)}</View>
									<View style={{ flex: 1, flexWrap: 'wrap' }}>{this.affichageServiceBagagerie(person.Bagagerie, person.droitsBagagerie, person.sans_rdvBagagerie, person.sur_rdvBagagerie, person.equipe_mobileBagagerie)}</View>
									<View style={{ flex: 1, flexWrap: 'wrap' }}>{this.affichageServiceChenil(person.Chenil, person.droitsChenil, person.sans_rdvChenil, person.sur_rdvChenil, person.equipe_mobileChenil)}</View>
									<View>
									</View>
								</View>
							</View>
						</View>
					</ScrollView>
				</View>
				{this._displayFloatingActionButton()}

			</SafeAreaView>
		);
	}

	affichageServiceMedG(medG, droitsMedG, sans_rdvMedG, sur_rdvMedG, equipe_mobileMedG) {
		if (medG != null) {
			if (equipe_mobileMedG != null) {
				return (
					<View style={style.line}>
						<Text style={[style.cell, style.content3]}>Médecin généraliste :{medG}</Text>
                        <Text style={[style.cell, style.content]}>{medG}</Text>
						<Text style={[style.cell, style.content2]}>{droitsMedG}</Text>
						<Text style={[style.cell, style.content]}>Equipe Mobile</Text>
					</View>
				)
			}
			else if (sans_rdvMedG != null && sur_rdvMedG != null) {
				return (
					<View style={style.line}>
                        <Text style={[style.cell, style.content3]}>Médecin généraliste :</Text>
                        <Text style={[style.cell, style.content]}>{medG}</Text>
                        <Text style={[style.cell, style.content2]}>{droitsMedG}</Text>
						<Text style={[style.cell, style.content]}>sans rdv : {sans_rdvMedG}</Text>
						<Text style={[style.cell, style.content]}>sur rdv : {sur_rdvMedG}</Text>
					</View>
				)
			}
			else if (sans_rdvMedG != null) {
				return (
					<View style={style.line}>
                        <Text style={[style.cell, style.content3]}>Médecin généraliste :</Text>
                        <Text style={[style.cell, style.content]}>{medG}</Text>
                        <Text style={[style.cell, style.content2]}>{droitsMedG}</Text>
						<Text style={[style.cell, style.content]}>sans rdv : {sans_rdvMedG}</Text>

					</View>
				)
			}
			else if (sur_rdvMedG != null) {
				return (
					<View style={style.line}>
                        <Text style={[style.cell, style.content3]}>Médecin généraliste :</Text>
                        <Text style={[style.cell, style.content]}>{medG}</Text>
                        <Text style={[style.cell, style.content2]}>{droitsMedG}</Text>
						<Text style={[style.cell, style.content]}>sur rdv : {sur_rdvMedG}</Text>
					</View>
				)
			}
			else {
				return (
					<View style={style.line}>
                        <Text style={[style.cell, style.content3]}>Médecin généraliste :</Text>
                        <Text style={[style.cell, style.content]}>{medG}</Text>
                        <Text style={[style.cell, style.content2]}>{droitsMedG}</Text>
					</View>
				)
			}
		}
		else return null;
	}
	affichageServiceDentaire(Dentaire, droitsDentaire, sans_rdvDentaire, sur_rdvDentaire, equipe_mobileDentaire) {
		if (Dentaire != null) {
			if (equipe_mobileDentaire != null) {
				return (
					<View style={style.line}>
						<Text style={[style.cell, style.content3]}>Dentaire :</Text>
                        <Text style={[style.cell, style.content]}>{Dentaire}</Text>
						<Text style={[style.cell, style.content2]}>{droitsDentaire}</Text>
						<Text style={[style.cell, style.content]}>Equipe Mobile</Text>
					</View>
				)
			}
			else if (sans_rdvDentaire != null && sur_rdvDentaire != null) {
				return (
					<View style={style.line}>
                        <Text style={[style.cell, style.content3]}>Dentaire :</Text>
                        <Text style={[style.cell, style.content]}>{Dentaire}</Text>
                            <Text style={[style.cell, style.content2]}>{droitsDentaire}</Text>
						<Text style={[style.cell, style.content]}>sans rdv : {sans_rdvDentaire}</Text>
						<Text style={[style.cell, style.content]}>sur rdv : {sur_rdvDentaire}</Text>
					</View>
				)
			}
			else if (sans_rdvDentaire != null) {
				return (
					<View style={style.line}>
                        <Text style={[style.cell, style.content3]}>Dentaire :</Text>
                        <Text style={[style.cell, style.content]}>{Dentaire}</Text>
                            <Text style={[style.cell, style.content2]}>{droitsDentaire}</Text>
						<Text style={[style.cell, style.content]}>sans rdv : {sans_rdvDentaire}</Text>

					</View>
				)
			}
			else if (sur_rdvDentaire != null) {
				return (
					<View style={style.line}>
                        <Text style={[style.cell, style.content3]}>Dentaire :</Text>
                        <Text style={[style.cell, style.content]}>{Dentaire}</Text>
                            <Text style={[style.cell, style.content2]}>{droitsDentaire}</Text>
						<Text style={[style.cell, style.content]}>sur rdv : {sur_rdvDentaire}</Text>
					</View>
				)
			}
			else {
				return (
					<View style={style.line}>
                        <Text style={[style.cell, style.content3]}>Dentaire :</Text>
                        <Text style={[style.cell, style.content]}>{Dentaire}</Text>
                            <Text style={[style.cell, style.content2]}>{droitsDentaire}</Text>
					</View>
				)
			}
		}
		else return null;
	}
	affichageServiceSoinsinfirmiers(Soinsinfirmiers, droitsSoinsinfirmiers, sans_rdvSoinsinfirmiers, sur_rdvSoinsinfirmiers, equipe_mobileSoinsinfirmiers) {
		if (Soinsinfirmiers != null) {
			if (equipe_mobileSoinsinfirmiers != null) {
				return (
					<View style={style.line}>
						<Text style={[style.cell, style.content3]}>Soins Infirmiers :</Text>
                        <Text style={[style.cell, style.content]}>{Soinsinfirmiers}</Text>
						<Text style={[style.cell, style.content2]}>{droitsSoinsinfirmiers}</Text>
						<Text style={[style.cell, style.content]}>Equipe Mobile</Text>
					</View>
				)
			}
			else if (sans_rdvSoinsinfirmiers != null && sur_rdvSoinsinfirmiers != null) {
				return (
					<View style={style.line}>
                        <Text style={[style.cell, style.content3]}>Soins Infirmiers :</Text>
                        <Text style={[style.cell, style.content]}>{Soinsinfirmiers}</Text>
                        <Text style={[style.cell, style.content2]}>{droitsSoinsinfirmiers}</Text>
						<Text style={[style.cell, style.content]}>sans rdv : {sans_rdvSoinsinfirmiers}</Text>
						<Text style={[style.cell, style.content]}>sur rdv : {sur_rdvSoinsinfirmiers}</Text>
					</View>
				)
			}
			else if (sans_rdvSoinsinfirmiers != null) {
				return (
					<View style={style.line}>
                        <Text style={[style.cell, style.content3]}>Soins Infirmiers :</Text>
                        <Text style={[style.cell, style.content]}>{Soinsinfirmiers}</Text>
                        <Text style={[style.cell, style.content2]}>{droitsSoinsinfirmiers}</Text>
						<Text style={[style.cell, style.content]}>sans rdv : {sans_rdvSoinsinfirmiers}</Text>

					</View>
				)
			}
			else if (sur_rdvSoinsinfirmiers != null) {
				return (
					<View style={style.line}>
                        <Text style={[style.cell, style.content3]}>Soins Infirmiers :</Text>
                        <Text style={[style.cell, style.content]}>{Soinsinfirmiers}</Text>
                        <Text style={[style.cell, style.content2]}>{droitsSoinsinfirmiers}</Text>
						<Text style={[style.cell, style.content]}>sur rdv : {sur_rdvSoinsinfirmiers}</Text>
					</View>
				)
			}
			else {
				return (
					<View style={style.line}>
                        <Text style={[style.cell, style.content3]}>Soins Infirmiers :</Text>
                        <Text style={[style.cell, style.content]}>{Soinsinfirmiers}</Text>
                        <Text style={[style.cell, style.content2]}>{droitsSoinsinfirmiers}</Text>
					</View>
				)
			}
		}
		else return null;
	}
	affichageServiceLaboratoire(Laboratoire, droitsLaboratoire, sans_rdvLaboratoire, sur_rdvLaboratoire, equipe_mobileLaboratoire) {
		if (Laboratoire != null) {
			if (equipe_mobileLaboratoire != null) {
				return (
					<View style={style.line}>
						<Text style={[style.cell, style.content3]}>Laboratoire :</Text>
                        <Text style={[style.cell, style.content]}>{Laboratoire}</Text>
						<Text style={[style.cell, style.content2]}>{droitsLaboratoire}</Text>
						<Text style={[style.cell, style.content]}>Equipe Mobile</Text>
					</View>
				)
			}
			else if (sans_rdvLaboratoire != null && sur_rdvLaboratoire != null) {
				return (
					<View style={style.line}>
                        <Text style={[style.cell, style.content3]}>Laboratoire :</Text>
                        <Text style={[style.cell, style.content]}>{Laboratoire}</Text>
                        <Text style={[style.cell, style.content2]}>{droitsLaboratoire}</Text>
						<Text style={[style.cell, style.content]}>sans rdv : {sans_rdvLaboratoire}</Text>
						<Text style={[style.cell, style.content]}>sur rdv : {sur_rdvLaboratoire}</Text>
					</View>
				)
			}
			else if (sans_rdvLaboratoire != null) {
				return (
					<View style={style.line}>
                        <Text style={[style.cell, style.content3]}>Laboratoire :</Text>
                        <Text style={[style.cell, style.content]}>{Laboratoire}</Text>
                        <Text style={[style.cell, style.content2]}>{droitsLaboratoire}</Text>
						<Text style={[style.cell, style.content]}>sans rdv : {sans_rdvLaboratoire}</Text>

					</View>
				)
			}
			else if (sur_rdvLaboratoire != null) {
				return (
					<View style={style.line}>
                        <Text style={[style.cell, style.content3]}>Laboratoire :</Text>
                        <Text style={[style.cell, style.content]}>{Laboratoire}</Text>
                        <Text style={[style.cell, style.content2]}>{droitsLaboratoire}</Text>
						<Text style={[style.cell, style.content]}>sur rdv : {sur_rdvLaboratoire}</Text>
					</View>
				)
			}
			else {
				return (
					<View style={style.line}>
                        <Text style={[style.cell, style.content3]}>Laboratoire :</Text>
                        <Text style={[style.cell, style.content]}>{Laboratoire}</Text>
                        <Text style={[style.cell, style.content2]}>{droitsLaboratoire}</Text>
					</View>
				)
			}
		}
		else return null;
	}
	affichageServiceDepistage(Depistage, droitsDepistage, sans_rdvDepistage, sur_rdvDepistage, equipe_mobileDepistage) {
		if (Depistage != null) {
			if (equipe_mobileDepistage != null) {
				return (
					<View style={style.line}>
                        <Text style={[style.cell, style.content3]}>Depistage :</Text>
                        <Text style={[style.cell, style.content]}>{Depistage}</Text>
						<Text style={[style.cell, style.content2]}>{droitsDepistage}</Text>
						<Text style={[style.cell, style.content]}>Equipe Mobile</Text>
					</View>
				)
			}
			else if (sans_rdvDepistage != null && sur_rdvDepistage != null) {
				return (
					<View style={style.line}>
                        <Text style={[style.cell, style.content3]}>Depistage :</Text>
                        <Text style={[style.cell, style.content]}>{Depistage}</Text>
                        <Text style={[style.cell, style.content2]}>{droitsDepistage}</Text>
						<Text style={[style.cell, style.content]}>sans rdv : {sans_rdvDepistage}</Text>
						<Text style={[style.cell, style.content]}>sur rdv : {sur_rdvDepistage}</Text>
					</View>
				)
			}
			else if (sans_rdvDepistage != null) {
				return (
					<View style={style.line}>
                        <Text style={[style.cell, style.content3]}>Depistage :</Text>
                        <Text style={[style.cell, style.content]}>{Depistage}</Text>
                        <Text style={[style.cell, style.content2]}>{droitsDepistage}</Text>
						<Text style={[style.cell, style.content]}>sans rdv : {sans_rdvDepistage}</Text>

					</View>
				)
			}
			else if (sur_rdvDepistage != null) {
				return (
					<View style={style.line}>
                        <Text style={[style.cell, style.content3]}>Depistage :</Text>
                        <Text style={[style.cell, style.content]}>{Depistage}</Text>
                        <Text style={[style.cell, style.content2]}>{droitsDepistage}</Text>
						<Text style={[style.cell, style.content]}>sur rdv : {sur_rdvDepistage}</Text>
					</View>
				)
			}
			else {
				return (
					<View style={style.line}>
                        <Text style={[style.cell, style.content3]}>Depistage :</Text>
                        <Text style={[style.cell, style.content]}>{Depistage}</Text>
                        <Text style={[style.cell, style.content2]}>{droitsDepistage}</Text>
					</View>
				)
			}
		}
		else return null;
	}
	affichageServiceImagerieMed(ImagerieMed, droitsImagerieMed, sans_rdvImagerieMed, sur_rdvImagerieMed, equipe_mobileImagerieMed) {
		if (ImagerieMed != null) {
			if (equipe_mobileImagerieMed != null) {
				return (
					<View style={style.line}>
						<Text style={[style.cell, style.content3]}>Imagerie Medicale :</Text>
                        <Text style={[style.cell, style.content]}>{ImagerieMed}</Text>
						<Text style={[style.cell, style.content2]}>{droitsImagerieMed}</Text>
						<Text style={[style.cell, style.content]}>Equipe Mobile</Text>
					</View>
				)
			}
			else if (sans_rdvImagerieMed != null && sur_rdvImagerieMed != null) {
				return (
					<View style={style.line}>
                        <Text style={[style.cell, style.content3]}>Imagerie Medicale :</Text>
                        <Text style={[style.cell, style.content]}>{ImagerieMed}</Text>
                        <Text style={[style.cell, style.content2]}>{droitsImagerieMed}</Text>
						<Text style={[style.cell, style.content]}>sans rdv : {sans_rdvImagerieMed}</Text>
						<Text style={[style.cell, style.content]}>sur rdv : {sur_rdvImagerieMed}</Text>
					</View>
				)
			}
			else if (sans_rdvImagerieMed != null) {
				return (
					<View style={style.line}>
                        <Text style={[style.cell, style.content3]}>Imagerie Medicale :</Text>
                        <Text style={[style.cell, style.content]}>{ImagerieMed}</Text>
                        <Text style={[style.cell, style.content2]}>{droitsImagerieMed}</Text>
						<Text style={[style.cell, style.content]}>sans rdv : {sans_rdvImagerieMed}</Text>

					</View>
				)
			}
			else if (sur_rdvImagerieMed != null) {
				return (
					<View style={style.line}>
                        <Text style={[style.cell, style.content3]}>Imagerie Medicale :</Text>
                        <Text style={[style.cell, style.content]}>{ImagerieMed}</Text>
                        <Text style={[style.cell, style.content2]}>{droitsImagerieMed}</Text>
						<Text style={[style.cell, style.content]}>sur rdv : {sur_rdvImagerieMed}</Text>
					</View>
				)
			}
			else {
				return (
					<View style={style.line}>
                        <Text style={[style.cell, style.content3]}>Imagerie Medicale :</Text>
                        <Text style={[style.cell, style.content]}>{ImagerieMed}</Text>
                        <Text style={[style.cell, style.content2]}>{droitsImagerieMed}</Text>
					</View>
				)
			}
		}
		else return null;
	}
	affichageServiceTraitement(Traitement, droitsTraitement, sans_rdvTraitement, sur_rdvTraitement, equipe_mobileTraitement) {
		if (Traitement != null) {
			if (equipe_mobileTraitement != null) {
				return (
					<View style={style.line}>
						<Text style={[style.cell, style.content3]}>Delivrance de Traitement :</Text>
                        <Text style={[style.cell, style.content]}>{Traitement}</Text>
						<Text style={[style.cell, style.content2]}>{droitsTraitement}</Text>
						<Text style={[style.cell, style.content]}>Equipe Mobile</Text>
					</View>
				)
			}
			else if (sans_rdvTraitement != null && sur_rdvTraitement != null) {
				return (
					<View style={style.line}>
                        <Text style={[style.cell, style.content3]}>Delivrance de Traitement :</Text>
                        <Text style={[style.cell, style.content]}>{Traitement}</Text>
                        <Text style={[style.cell, style.content2]}>{droitsTraitement}</Text>
						<Text style={[style.cell, style.content]}>sans rdv : {sans_rdvTraitement}</Text>
						<Text style={[style.cell, style.content]}>sur rdv : {sur_rdvTraitement}</Text>
					</View>
				)
			}
			else if (sans_rdvTraitement != null) {
				return (
					<View style={style.line}>
                        <Text style={[style.cell, style.content3]}>Delivrance de Traitement :</Text>
                        <Text style={[style.cell, style.content]}>{Traitement}</Text>
                        <Text style={[style.cell, style.content2]}>{droitsTraitement}</Text>
						<Text style={[style.cell, style.content]}>sans rdv : {sans_rdvTraitement}</Text>

					</View>
				)
			}
			else if (sur_rdvTraitement != null) {
				return (
					<View style={style.line}>
                        <Text style={[style.cell, style.content3]}>Delivrance de Traitement :</Text>
                        <Text style={[style.cell, style.content]}>{Traitement}</Text>
                        <Text style={[style.cell, style.content2]}>{droitsTraitement}</Text>
						<Text style={[style.cell, style.content]}>sur rdv : {sur_rdvTraitement}</Text>
					</View>
				)
			}
			else {
				return (
					<View style={style.line}>
                        <Text style={[style.cell, style.content3]}>Delivrance de Traitement :</Text>
                        <Text style={[style.cell, style.content]}>{Traitement}</Text>
                        <Text style={[style.cell, style.content2]}>{droitsTraitement}</Text>
					</View>
				)
			}
		}
		else return null;
	}
	affichageServicePsychiatrique(Psychiatrique, droitsPsychiatrique, sans_rdvPsychiatrique, sur_rdvPsychiatrique, equipe_mobilePsychiatrique) {
		if (Psychiatrique != null) {
			if (equipe_mobilePsychiatrique != null) {
				return (
					<View style={style.line}>
						<Text style={[style.cell, style.content3]}>Psychiatrique :</Text>
                        <Text style={[style.cell, style.content]}>{Psychiatrique}</Text>
						<Text style={[style.cell, style.content2]}>{droitsPsychiatrique}</Text>
						<Text style={[style.cell, style.content]}>Equipe Mobile</Text>
					</View>
				)
			}
			else if (sans_rdvPsychiatrique != null && sur_rdvPsychiatrique != null) {
				return (
					<View style={style.line}>
                        <Text style={[style.cell, style.content3]}>Psychiatrique :</Text>
                        <Text style={[style.cell, style.content]}>{Psychiatrique}</Text>
                        <Text style={[style.cell, style.content2]}>{droitsPsychiatrique}</Text>
						<Text style={[style.cell, style.content]}>sans rdv : {sans_rdvPsychiatrique}</Text>
						<Text style={[style.cell, style.content]}>sur rdv : {sur_rdvPsychiatrique}</Text>
					</View>
				)
			}
			else if (sans_rdvPsychiatrique != null) {
				return (
					<View style={style.line}>
                        <Text style={[style.cell, style.content3]}>Psychiatrique :</Text>
                        <Text style={[style.cell, style.content]}>{Psychiatrique}</Text>
                        <Text style={[style.cell, style.content2]}>{droitsPsychiatrique}</Text>
						<Text style={[style.cell, style.content]}>sans rdv : {sans_rdvPsychiatrique}</Text>

					</View>
				)
			}
			else if (sur_rdvPsychiatrique != null) {
				return (
					<View style={style.line}>
                        <Text style={[style.cell, style.content3]}>Psychiatrique :</Text>
                        <Text style={[style.cell, style.content]}>{Psychiatrique}</Text>
                        <Text style={[style.cell, style.content2]}>{droitsPsychiatrique}</Text>
						<Text style={[style.cell, style.content]}>sur rdv : {sur_rdvPsychiatrique}</Text>
					</View>
				)
			}
			else {
				return (
					<View style={style.line}>
                        <Text style={[style.cell, style.content3]}>Psychiatrique :</Text>
                        <Text style={[style.cell, style.content]}>{Psychiatrique}</Text>
                        <Text style={[style.cell, style.content2]}>{droitsPsychiatrique}</Text>
					</View>
				)
			}
		}
		else return null;
	}
	affichageServicePsychologue(Psychologue, droitsPsychologue, sans_rdvPsychologue, sur_rdvPsychologue, equipe_mobilePsychologue) {
		if (Psychologue != null) {
			if (equipe_mobilePsychologue != null) {
				return (
					<View style={style.line}>
						<Text style={[style.cell, style.content3]}>Psychologue :</Text>
                        <Text style={[style.cell, style.content]}>{Psychologue}</Text>
						<Text style={[style.cell, style.content2]}>{droitsPsychologue}</Text>
						<Text style={[style.cell, style.content]}>Equipe Mobile</Text>
					</View>
				)
			}
			else if (sans_rdvPsychologue != null && sur_rdvPsychologue != null) {
				return (
					<View style={style.line}>
                        <Text style={[style.cell, style.content3]}>Psychologue :</Text>
                        <Text style={[style.cell, style.content]}>{Psychologue}</Text>
                        <Text style={[style.cell, style.content2]}>{droitsPsychologue}</Text>
						<Text style={[style.cell, style.content]}>sans rdv : {sans_rdvPsychologue}</Text>
						<Text style={[style.cell, style.content]}>sur rdv : {sur_rdvPsychologue}</Text>
					</View>
				)
			}
			else if (sans_rdvPsychologue != null) {
				return (
					<View style={style.line}>
                        <Text style={[style.cell, style.content3]}>Psychologue :</Text>
                        <Text style={[style.cell, style.content]}>{Psychologue}</Text>
                        <Text style={[style.cell, style.content2]}>{droitsPsychologue}</Text>
						<Text style={[style.cell, style.content]}>sans rdv : {sans_rdvPsychologue}</Text>

					</View>
				)
			}
			else if (sur_rdvPsychologue != null) {
				return (
					<View style={style.line}>
                        <Text style={[style.cell, style.content3]}>Psychologue :</Text>
                        <Text style={[style.cell, style.content]}>{Psychologue}</Text>
                        <Text style={[style.cell, style.content2]}>{droitsPsychologue}</Text>
						<Text style={[style.cell, style.content]}>sur rdv : {sur_rdvPsychologue}</Text>
					</View>
				)
			}
			else {
				return (
					<View style={style.line}>
                        <Text style={[style.cell, style.content3]}>Psychologue :</Text>
                        <Text style={[style.cell, style.content]}>{Psychologue}</Text>
                        <Text style={[style.cell, style.content2]}>{droitsPsychologue}</Text>
					</View>
				)
			}
		}
		else return null;
	}
	affichageServiceTraitementPsychiatrique(TraitementPsychiatrique, droitsTraitementPsychiatrique, sans_rdvTraitementPsychiatrique, sur_rdvTraitementPsychiatrique, equipe_mobileTraitementPsychiatrique) {
		if (TraitementPsychiatrique != null) {
			if (equipe_mobileTraitementPsychiatrique != null) {
				return (
					<View style={style.line}>
						<Text style={[style.cell, style.content3]}>Traitement Psychiatrique :</Text>
                        <Text style={[style.cell, style.content]}>{TraitementPsychiatrique}</Text>
						<Text style={[style.cell, style.content2]}>{droitsTraitementPsychiatrique}</Text>
						<Text style={[style.cell, style.content]}>Equipe Mobile</Text>
					</View>
				)
			}
			else if (sans_rdvTraitementPsychiatrique != null && sur_rdvTraitementPsychiatrique != null) {
				return (
					<View style={style.line}>
                        <Text style={[style.cell, style.content3]}>Traitement Psychiatrique :</Text>
                        <Text style={[style.cell, style.content]}>{TraitementPsychiatrique}</Text>
                                                <Text style={[style.cell, style.content2]}>{droitsTraitementPsychiatrique}</Text>
						<Text style={[style.cell, style.content]}>sans rdv : {sans_rdvTraitementPsychiatrique}</Text>
						<Text style={[style.cell, style.content]}>sur rdv : {sur_rdvTraitementPsychiatrique}</Text>
					</View>
				)
			}
			else if (sans_rdvTraitementPsychiatrique != null) {
				return (
					<View style={style.line}>
                        <Text style={[style.cell, style.content3]}>Traitement Psychiatrique :</Text>
                        <Text style={[style.cell, style.content]}>{TraitementPsychiatrique}</Text>
                                                <Text style={[style.cell, style.content2]}>{droitsTraitementPsychiatrique}</Text>
						<Text style={[style.cell, style.content]}>sans rdv : {sans_rdvTraitementPsychiatrique}</Text>

					</View>
				)
			}
			else if (sur_rdvTraitementPsychiatrique != null) {
				return (
					<View style={style.line}>
                        <Text style={[style.cell, style.content3]}>Traitement Psychiatrique :</Text>
                        <Text style={[style.cell, style.content]}>{TraitementPsychiatrique}</Text>
                                                <Text style={[style.cell, style.content2]}>{droitsTraitementPsychiatrique}</Text>
						<Text style={[style.cell, style.content]}>sur rdv : {sur_rdvTraitementPsychiatrique}</Text>
					</View>
				)
			}
			else {
				return (
					<View style={style.line}>
                        <Text style={[style.cell, style.content3]}>Traitement Psychiatrique :</Text>
                        <Text style={[style.cell, style.content]}>{TraitementPsychiatrique}</Text>
                                                <Text style={[style.cell, style.content2]}>{droitsTraitementPsychiatrique}</Text>
					</View>
				)
			}
		}
		else return null;
	}
	affichageServiceConsultationAddictologie(ConsultationAddictologie, droitsConsultationAddictologie, sans_rdvConsultationAddictologie, sur_rdvConsultationAddictologie, equipe_mobileConsultationAddictologie) {
		if (ConsultationAddictologie != null) {
			if (equipe_mobileConsultationAddictologie != null) {
				return (
					<View style={style.line}>
						<Text style={[style.cell, style.content3]}>Consultation Addictologie :</Text>
                        <Text style={[style.cell, style.content]}>{ConsultationAddictologie}</Text>
						<Text style={[style.cell, style.content2]}>{droitsConsultationAddictologie}</Text>
						<Text style={[style.cell, style.content]}>Equipe Mobile</Text>
					</View>
				)
			}
			else if (sans_rdvConsultationAddictologie != null && sur_rdvConsultationAddictologie != null) {
				return (
					<View style={style.line}>
                        <Text style={[style.cell, style.content3]}>Consultation Addictologie :</Text>
                        <Text style={[style.cell, style.content]}>{ConsultationAddictologie}</Text>
                                                <Text style={[style.cell, style.content2]}>{droitsConsultationAddictologie}</Text>
						<Text style={[style.cell, style.content]}>sans rdv : {sans_rdvConsultationAddictologie}</Text>
						<Text style={[style.cell, style.content]}>sur rdv : {sur_rdvConsultationAddictologie}</Text>
					</View>
				)
			}
			else if (sans_rdvConsultationAddictologie != null) {
				return (
					<View style={style.line}>
                        <Text style={[style.cell, style.content3]}>Consultation Addictologie :</Text>
                        <Text style={[style.cell, style.content]}>{ConsultationAddictologie}</Text>
                                                <Text style={[style.cell, style.content2]}>{droitsConsultationAddictologie}</Text>
						<Text style={[style.cell, style.content]}>sans rdv : {sans_rdvConsultationAddictologie}</Text>

					</View>
				)
			}
			else if (sur_rdvConsultationAddictologie != null) {
				return (
					<View style={style.line}>
                        <Text style={[style.cell, style.content3]}>Consultation Addictologie :</Text>
                        <Text style={[style.cell, style.content]}>{ConsultationAddictologie}</Text>
                                                <Text style={[style.cell, style.content2]}>{droitsConsultationAddictologie}</Text>
						<Text style={[style.cell, style.content]}>sur rdv : {sur_rdvConsultationAddictologie}</Text>
					</View>
				)
			}
			else {
				return (
					<View style={style.line}>
                        <Text style={[style.cell, style.content3]}>Consultation Addictologie :</Text>
                        <Text style={[style.cell, style.content]}>{ConsultationAddictologie}</Text>
                                                <Text style={[style.cell, style.content2]}>{droitsConsultationAddictologie}</Text>
					</View>
				)
			}
		}
		else return null;
	}
	affichageServicedelivranceTraitement(delivranceTraitement, droitsdelivranceTraitement, sans_rdvdelivranceTraitement, sur_rdvdelivranceTraitement, equipe_mobiledelivranceTraitement) {
		if (delivranceTraitement != null) {
			if (equipe_mobiledelivranceTraitement != null) {
				return (
					<View style={style.line}>
						<Text style={[style.cell, style.content3]}>Traitements addictions :</Text>
                        <Text style={[style.cell, style.content]}>{delivranceTraitement}</Text>
						<Text style={[style.cell, style.content2]}>{droitsdelivranceTraitement}</Text>
						<Text style={[style.cell, style.content]}>Equipe Mobile</Text>
					</View>
				)
			}
			else if (sans_rdvdelivranceTraitement != null && sur_rdvdelivranceTraitement != null) {
				return (
					<View style={style.line}>
                        <Text style={[style.cell, style.content3]}>Traitements addictions :</Text>
                        <Text style={[style.cell, style.content]}>{delivranceTraitement}</Text>
                                                <Text style={[style.cell, style.content2]}>{droitsdelivranceTraitement}</Text>
						<Text style={[style.cell, style.content]}>sans rdv : {sans_rdvdelivranceTraitement}</Text>
						<Text style={[style.cell, style.content]}>sur rdv : {sur_rdvdelivranceTraitement}</Text>
					</View>
				)
			}
			else if (sans_rdvdelivranceTraitement != null) {
				return (
					<View style={style.line}>
                        <Text style={[style.cell, style.content3]}>Traitements addictions :</Text>
                        <Text style={[style.cell, style.content]}>{delivranceTraitement}</Text>
                                                <Text style={[style.cell, style.content2]}>{droitsdelivranceTraitement}</Text>
						<Text style={[style.cell, style.content]}>sans rdv : {sans_rdvdelivranceTraitement}</Text>

					</View>
				)
			}
			else if (sur_rdvdelivranceTraitement != null) {
				return (
					<View style={style.line}>
                        <Text style={[style.cell, style.content3]}>Traitements addictions :</Text>
                        <Text style={[style.cell, style.content]}>{delivranceTraitement}</Text>
                                                <Text style={[style.cell, style.content2]}>{droitsdelivranceTraitement}</Text>
						<Text style={[style.cell, style.content]}>sur rdv : {sur_rdvdelivranceTraitement}</Text>
					</View>
				)
			}
			else {
				return (
					<View style={style.line}>
                        <Text style={[style.cell, style.content3]}>Traitements addictions :</Text>
                        <Text style={[style.cell, style.content]}>{delivranceTraitement}</Text>
                                                <Text style={[style.cell, style.content2]}>{droitsdelivranceTraitement}</Text>
					</View>
				)
			}
		}
		else return null;
	}
	affichageServiceMethadone(Methadone, droitsMethadone, sans_rdvMethadone, sur_rdvMethadone, equipe_mobileMethadone) {
		if (Methadone != null) {
			if (equipe_mobileMethadone != null) {
				return (
					<View style={style.line}>
						<Text style={[style.cell, style.content3]}>Methadone :</Text>
                        <Text style={[style.cell, style.content]}>{Methadone}</Text>
						<Text style={[style.cell, style.content2]}>{droitsMethadone}</Text>
						<Text style={[style.cell, style.content]}>Equipe Mobile</Text>
					</View>
				)
			}
			else if (sans_rdvMethadone != null && sur_rdvMethadone != null) {
				return (
					<View style={style.line}>
                        <Text style={[style.cell, style.content3]}>Methadone :</Text>
                        <Text style={[style.cell, style.content]}>{Methadone}</Text>
                                                <Text style={[style.cell, style.content2]}>{droitsMethadone}</Text>
						<Text style={[style.cell, style.content]}>sans rdv : {sans_rdvMethadone}</Text>
						<Text style={[style.cell, style.content]}>sur rdv : {sur_rdvMethadone}</Text>
					</View>
				)
			}
			else if (sans_rdvMethadone != null) {
				return (
					<View style={style.line}>
                        <Text style={[style.cell, style.content3]}>Methadone :</Text>
                        <Text style={[style.cell, style.content]}>{Methadone}</Text>
                                                <Text style={[style.cell, style.content2]}>{droitsMethadone}</Text>
						<Text style={[style.cell, style.content]}>sans rdv : {sans_rdvMethadone}</Text>

					</View>
				)
			}
			else if (sur_rdvMethadone != null) {
				return (
					<View style={style.line}>
                        <Text style={[style.cell, style.content3]}>Methadone :</Text>
                        <Text style={[style.cell, style.content]}>{Methadone}</Text>
                                                <Text style={[style.cell, style.content2]}>{droitsMethadone}</Text>
						<Text style={[style.cell, style.content]}>sur rdv : {sur_rdvMethadone}</Text>
					</View>
				)
			}
			else {
				return (
					<View style={style.line}>
                        <Text style={[style.cell, style.content3]}>Methadone :</Text>
                        <Text style={[style.cell, style.content]}>{Methadone}</Text>
                                                <Text style={[style.cell, style.content2]}>{droitsMethadone}</Text>
					</View>
				)
			}
		}
		else return null;
	}
	affichageServiceSubutex(Subutex, droitsSubutex, sans_rdvSubutex, sur_rdvSubutex, equipe_mobileSubutex) {
		if (Subutex != null) {
			if (equipe_mobileSubutex != null) {
				return (
					<View style={style.line}>
                        <Text style={[style.cell, style.content3]}>Subutex :</Text>
                        <Text style={[style.cell, style.content]}>{Subutex}</Text>
                        <Text style={[style.cell, style.content2]}>{droitsSubutex}</Text>
						<Text style={[style.cell, style.content]}>Equipe Mobile</Text>
					</View>
				)
			}
			else if (sans_rdvSubutex != null && sur_rdvSubutex != null) {
				return (
					<View style={style.line}>
                        <Text style={[style.cell, style.content3]}>Subutex :</Text>
                        <Text style={[style.cell, style.content]}>{Subutex}</Text>
                                            <Text style={[style.cell, style.content2]}>{droitsSubutex}</Text>
						<Text style={[style.cell, style.content]}>sans rdv : {sans_rdvSubutex}</Text>
						<Text style={[style.cell, style.content]}>sur rdv : {sur_rdvSubutex}</Text>
					</View>
				)
			}
			else if (sans_rdvSubutex != null) {
				return (
					<View style={style.line}>
                        <Text style={[style.cell, style.content3]}>Subutex :</Text>
                        <Text style={[style.cell, style.content]}>{Subutex}</Text>
                                            <Text style={[style.cell, style.content2]}>{droitsSubutex}</Text>
						<Text style={[style.cell, style.content]}>sans rdv : {sans_rdvSubutex}</Text>

					</View>
				)
			}
			else if (sur_rdvSubutex != null) {
				return (
					<View style={style.line}>
                        <Text style={[style.cell, style.content3]}>Subutex :</Text>
                        <Text style={[style.cell, style.content]}>{Subutex}</Text>
                                            <Text style={[style.cell, style.content2]}>{droitsSubutex}</Text>
						<Text style={[style.cell, style.content]}>sur rdv : {sur_rdvSubutex}</Text>
					</View>
				)
			}
			else {
				return (
					<View style={style.line}>
                        <Text style={[style.cell, style.content3]}>Subutex :</Text>
                        <Text style={[style.cell, style.content]}>{Subutex}</Text>
                                            <Text style={[style.cell, style.content2]}>{droitsSubutex}</Text>
					</View>
				)
			}
		}
		else return null;
	}
	affichageServicePsychotropes(Psychotropes, droitsPsychotropes, sans_rdvPsychotropes, sur_rdvPsychotropes, equipe_mobilePsychotropes) {
		if (Psychotropes != null) {
			if (equipe_mobilePsychotropes != null) {
				return (
					<View style={style.line}>
                        <Text style={[style.cell, style.content3]}>Psychotropes :</Text>
                        <Text style={[style.cell, style.content]}>{Psychotropes}</Text>
                                            <Text style={[style.cell, style.content2]}>{droitsPsychotropes}</Text>
						<Text style={[style.cell, style.content]}>Equipe Mobile</Text>
					</View>
				)
			}
			else if (sans_rdvPsychotropes != null && sur_rdvPsychotropes != null) {
				return (
					<View style={style.line}>
                        <Text style={[style.cell, style.content3]}>Psychotropes :</Text>
                        <Text style={[style.cell, style.content]}>{Psychotropes}</Text>
                        <Text style={[style.cell, style.content2]}>{droitsPsychotropes}</Text>
						<Text style={[style.cell, style.content]}>sans rdv : {sans_rdvPsychotropes}</Text>
						<Text style={[style.cell, style.content]}>sur rdv : {sur_rdvPsychotropes}</Text>
					</View>
				)
			}
			else if (sans_rdvPsychotropes != null) {
				return (
					<View style={style.line}>
                        <Text style={[style.cell, style.content3]}>Psychotropes :</Text>
                        <Text style={[style.cell, style.content]}>{Psychotropes}</Text>
                        <Text style={[style.cell, style.content2]}>{droitsPsychotropes}</Text>
						<Text style={[style.cell, style.content]}>sans rdv : {sans_rdvPsychotropes}</Text>

					</View>
				)
			}
			else if (sur_rdvPsychotropes != null) {
				return (
					<View style={style.line}>
                        <Text style={[style.cell, style.content3]}>Psychotropes :</Text>
                        <Text style={[style.cell, style.content]}>{Psychotropes}</Text>
                        <Text style={[style.cell, style.content2]}>{droitsPsychotropes}</Text>
						<Text style={[style.cell, style.content]}>sur rdv : {sur_rdvPsychotropes}</Text>
					</View>
				)
			}
			else {
				return (
					<View style={style.line}>
                        <Text style={[style.cell, style.content3]}>Psychotropes :</Text>
                        <Text style={[style.cell, style.content]}>{Psychotropes}</Text>
                        <Text style={[style.cell, style.content2]}>{droitsPsychotropes}</Text>
					</View>
				)
			}
		}
		else return null;
	}
	affichageServiceConsultSociales(ConsultSociales, droitsConsultSociales, sans_rdvConsultSociales, sur_rdvConsultSociales, equipe_mobileConsultSociales) {
		if (ConsultSociales != null) {
			if (equipe_mobileConsultSociales != null) {
				return (
					<View style={style.line}>
						<Text style={[style.cell, style.content3]}>Consultations Sociales :</Text>
                        <Text style={[style.cell, style.content]}>{ConsultSociales}</Text>
						<Text style={[style.cell, style.content2]}>{droitsConsultSociales}</Text>
						<Text style={[style.cell, style.content]}>Equipe Mobile</Text>
					</View>
				)
			}
			else if (sans_rdvConsultSociales != null && sur_rdvConsultSociales != null) {
				return (
					<View style={style.line}>
                        <Text style={[style.cell, style.content3]}>Consultations Sociales :</Text>
                        <Text style={[style.cell, style.content]}>{ConsultSociales}</Text>
                        <Text style={[style.cell, style.content2]}>{droitsConsultSociales}</Text>
						<Text style={[style.cell, style.content]}>sans rdv : {sans_rdvConsultSociales}</Text>
						<Text style={[style.cell, style.content]}>sur rdv : {sur_rdvConsultSociales}</Text>
					</View>
				)
			}
			else if (sans_rdvConsultSociales != null) {
				return (
					<View style={style.line}>
                        <Text style={[style.cell, style.content3]}>Consultations Sociales :</Text>
                        <Text style={[style.cell, style.content]}>{ConsultSociales}</Text>
                        <Text style={[style.cell, style.content2]}>{droitsConsultSociales}</Text>
						<Text style={[style.cell, style.content]}>sans rdv : {sans_rdvConsultSociales}</Text>

					</View>
				)
			}
			else if (sur_rdvConsultSociales != null) {
				return (
					<View style={style.line}>
                        <Text style={[style.cell, style.content3]}>Consultations Sociales :</Text>
                        <Text style={[style.cell, style.content]}>{ConsultSociales}</Text>
                        <Text style={[style.cell, style.content2]}>{droitsConsultSociales}</Text>
						<Text style={[style.cell, style.content]}>sur rdv : {sur_rdvConsultSociales}</Text>
					</View>
				)
			}
			else {
				return (
					<View style={style.line}>
                        <Text style={[style.cell, style.content3]}>Consultations Sociales :</Text>
                        <Text style={[style.cell, style.content]}>{ConsultSociales}</Text>
                        <Text style={[style.cell, style.content2]}>{droitsConsultSociales}</Text>
					</View>
				)
			}
		}
		else return null;
	}
	affichageServiceSocioEducatif(SocioEducatif, droitsSocioEducatif, sans_rdvSocioEducatif, sur_rdvSocioEducatif, equipe_mobileSocioEducatif) {
		if (SocioEducatif != null) {
			if (equipe_mobileSocioEducatif != null) {
				return (
					<View style={style.line}>
                        <Text style={[style.cell, style.content3]}>Accompagnement Socio-Educatif :</Text>
                        <Text style={[style.cell, style.content]}>{SocioEducatif}</Text>
                        <Text style={[style.cell, style.content2]}>{droitsSocioEducatif}</Text>
						<Text style={[style.cell, style.content]}>Equipe Mobile</Text>
					</View>
				)
			}
			else if (sans_rdvSocioEducatif != null && sur_rdvSocioEducatif != null) {
				return (
					<View style={style.line}>
                        <Text style={[style.cell, style.content3]}>Accompagnement Socio-Educatif :</Text>
                        <Text style={[style.cell, style.content]}>{SocioEducatif}</Text>
                        <Text style={[style.cell, style.content2]}>{droitsSocioEducatif}</Text>
						<Text style={[style.cell, style.content]}>sans rdv : {sans_rdvSocioEducatif}</Text>
						<Text style={[style.cell, style.content]}>sur rdv : {sur_rdvSocioEducatif}</Text>
					</View>
				)
			}
			else if (sans_rdvSocioEducatif != null) {
				return (
					<View style={style.line}>
                        <Text style={[style.cell, style.content3]}>Accompagnement Socio-Educatif :</Text>
                        <Text style={[style.cell, style.content]}>{SocioEducatif}</Text>
                        <Text style={[style.cell, style.content2]}>{droitsSocioEducatif}</Text>
						<Text style={[style.cell, style.content]}>sans rdv : {sans_rdvSocioEducatif}</Text>

					</View>
				)
			}
			else if (sur_rdvSocioEducatif != null) {
				return (
					<View style={style.line}>
                        <Text style={[style.cell, style.content3]}>Accompagnement Socio-Educatif :</Text>
                        <Text style={[style.cell, style.content]}>{SocioEducatif}</Text>
                        <Text style={[style.cell, style.content2]}>{droitsSocioEducatif}</Text>
						<Text style={[style.cell, style.content]}>sur rdv : {sur_rdvSocioEducatif}</Text>
					</View>
				)
			}
			else {
				return (
					<View style={style.line}>
                        <Text style={[style.cell, style.content3]}>Accompagnement Socio-Educatif :</Text>
                        <Text style={[style.cell, style.content]}>{SocioEducatif}</Text>
                        <Text style={[style.cell, style.content2]}>{droitsSocioEducatif}</Text>
					</View>
				)
			}
		}
		else return null;
	}
	affichageServiceDomiciliation(Domiciliation, droitsDomiciliation, sans_rdvDomiciliation, sur_rdvDomiciliation, equipe_mobileDomiciliation) {
		if (Domiciliation != null) {
			if (equipe_mobileDomiciliation != null) {
				return (
					<View style={style.line}>
						<Text style={[style.cell, style.content3]}>Domiciliation :</Text>
                        <Text style={[style.cell, style.content]}>{Domiciliation}</Text>
						<Text style={[style.cell, style.content2]}>{droitsDomiciliation}</Text>
						<Text style={[style.cell, style.content]}>Equipe Mobile</Text>
					</View>
				)
			}
			else if (sans_rdvDomiciliation != null && sur_rdvDomiciliation != null) {
				return (
					<View style={style.line}>
                        <Text style={[style.cell, style.content3]}>Domiciliation :</Text>
                        <Text style={[style.cell, style.content]}>{Domiciliation}</Text>
                                                <Text style={[style.cell, style.content2]}>{droitsDomiciliation}</Text>
						<Text style={[style.cell, style.content]}>sans rdv : {sans_rdvDomiciliation}</Text>
						<Text style={[style.cell, style.content]}>sur rdv : {sur_rdvDomiciliation}</Text>
					</View>
				)
			}
			else if (sans_rdvDomiciliation != null) {
				return (
					<View style={style.line}>
                        <Text style={[style.cell, style.content3]}>Domiciliation :</Text>
                        <Text style={[style.cell, style.content]}>{Domiciliation}</Text>
                                                <Text style={[style.cell, style.content2]}>{droitsDomiciliation}</Text>
						<Text style={[style.cell, style.content]}>sans rdv : {sans_rdvDomiciliation}</Text>

					</View>
				)
			}
			else if (sur_rdvDomiciliation != null) {
				return (
					<View style={style.line}>
                        <Text style={[style.cell, style.content3]}>Domiciliation :</Text>
                        <Text style={[style.cell, style.content]}>{Domiciliation}</Text>
                                                <Text style={[style.cell, style.content2]}>{droitsDomiciliation}</Text>
						<Text style={[style.cell, style.content]}>sur rdv : {sur_rdvDomiciliation}</Text>
					</View>
				)
			}
			else {
				return (
					<View style={style.line}>
                        <Text style={[style.cell, style.content3]}>Domiciliation :</Text>
                        <Text style={[style.cell, style.content]}>{Domiciliation}</Text>
                                                <Text style={[style.cell, style.content2]}>{droitsDomiciliation}</Text>
					</View>
				)
			}
		}
		else return null;
	}
	affichageServiceJuridique(Juridique, droitsJuridique, sans_rdvJuridique, sur_rdvJuridique, equipe_mobileJuridique) {
		if (Juridique != null) {
			if (equipe_mobileJuridique != null) {
				return (
					<View style={style.line}>
                        <Text style={[style.cell, style.content3]}>Juridique :</Text>
                        <Text style={[style.cell, style.content]}>{Juridique}</Text>
                                                <Text style={[style.cell, style.content2]}>{droitsJuridique}</Text>
						<Text style={[style.cell, style.content]}>Equipe Mobile</Text>
					</View>
				)
			}
			else if (sans_rdvJuridique != null && sur_rdvJuridique != null) {
				return (
					<View style={style.line}>
                        <Text style={[style.cell, style.content3]}>Juridique :</Text>
                        <Text style={[style.cell, style.content]}>{Juridique}</Text>
                        <Text style={[style.cell, style.content2]}>{droitsJuridique}</Text>
						<Text style={[style.cell, style.content]}>sans rdv : {sans_rdvJuridique}</Text>
						<Text style={[style.cell, style.content]}>sur rdv : {sur_rdvJuridique}</Text>
					</View>
				)
			}
			else if (sans_rdvJuridique != null) {
				return (
					<View style={style.line}>
                        <Text style={[style.cell, style.content3]}>Juridique :</Text>
                        <Text style={[style.cell, style.content]}>{Juridique}</Text>
                        <Text style={[style.cell, style.content2]}>{droitsJuridique}</Text>
						<Text style={[style.cell, style.content]}>sans rdv : {sans_rdvJuridique}</Text>

					</View>
				)
			}
			else if (sur_rdvJuridique != null) {
				return (
					<View style={style.line}>
                        <Text style={[style.cell, style.content3]}>Juridique :</Text>
                        <Text style={[style.cell, style.content]}>{Juridique}</Text>
                        <Text style={[style.cell, style.content2]}>{droitsJuridique}</Text>
						<Text style={[style.cell, style.content]}>sur rdv : {sur_rdvJuridique}</Text>
					</View>
				)
			}
			else {
				return (
					<View style={style.line}>
                       <Text style={[style.cell, style.content3]}>Juridique :</Text>
                        <Text style={[style.cell, style.content]}>{Juridique}</Text>
                        <Text style={[style.cell, style.content2]}>{droitsJuridique}</Text>
					</View>
				)
			}
		}
		else return null;
	}
	affichageServiceHebergement(Hebergement, droitsHebergement, sans_rdvHebergement, sur_rdvHebergement, equipe_mobileHebergement) {
		if (Hebergement != null) {
			if (equipe_mobileHebergement != null) {
				return (
					<View style={style.line}>
                        <Text style={[style.cell, style.content3]}>Hebergement :</Text>
                        <Text style={[style.cell, style.content]}>{Hebergement}</Text>
                        <Text style={[style.cell, style.content2]}>{droitsHebergement}</Text>
						<Text style={[style.cell, style.content]}>Equipe Mobile</Text>
					</View>
				)
			}
			else if (sans_rdvHebergement != null && sur_rdvHebergement != null) {
				return (
					<View style={style.line}>
                        <Text style={[style.cell, style.content3]}>Hebergement :</Text>
                        <Text style={[style.cell, style.content]}>{Hebergement}</Text>
                                            <Text style={[style.cell, style.content2]}>{droitsHebergement}</Text>
						<Text style={[style.cell, style.content]}>sans rdv : {sans_rdvHebergement}</Text>
						<Text style={[style.cell, style.content]}>sur rdv : {sur_rdvHebergement}</Text>
					</View>
				)
			}
			else if (sans_rdvHebergement != null) {
				return (
					<View style={style.line}>
                        <Text style={[style.cell, style.content3]}>Hebergement :</Text>
                        <Text style={[style.cell, style.content]}>{Hebergement}</Text>
                                            <Text style={[style.cell, style.content2]}>{droitsHebergement}</Text>
						<Text style={[style.cell, style.content]}>sans rdv : {sans_rdvHebergement}</Text>

					</View>
				)
			}
			else if (sur_rdvHebergement != null) {
				return (
					<View style={style.line}>
                        <Text style={[style.cell, style.content3]}>Hebergement :</Text>
                        <Text style={[style.cell, style.content]}>{Hebergement}</Text>
                                            <Text style={[style.cell, style.content2]}>{droitsHebergement}</Text>
						<Text style={[style.cell, style.content]}>sur rdv : {sur_rdvHebergement}</Text>
					</View>
				)
			}
			else {
				return (
					<View style={style.line}>
                        <Text style={[style.cell, style.content3]}>Hebergement :</Text>
                        <Text style={[style.cell, style.content]}>{Hebergement}</Text>
                                            <Text style={[style.cell, style.content2]}>{droitsHebergement}</Text>
					</View>
				)
			}
		}
		else return null;
	}
	affichageServiceRepas(Repas, droitsRepas, sans_rdvRepas, sur_rdvRepas, equipe_mobileRepas) {
		if (Repas != null) {
			if (equipe_mobileRepas != null) {
				return (
					<View style={style.line}>
                        <Text style={[style.cell, style.content3]}>Repas :</Text>
                        <Text style={[style.cell, style.content]}>{Repas}</Text>
                                            <Text style={[style.cell, style.content2]}>{droitsRepas}</Text>
						<Text style={[style.cell, style.content]}>Equipe Mobile</Text>
					</View>
				)
			}
			else if (sans_rdvRepas != null && sur_rdvRepas != null) {
				return (
					<View style={style.line}>
                        <Text style={[style.cell, style.content3]}>Repas :</Text>
                        <Text style={[style.cell, style.content]}>{Repas}</Text>
                        <Text style={[style.cell, style.content2]}>{droitsRepas}</Text>
						<Text style={[style.cell, style.content]}>sans rdv : {sans_rdvRepas}</Text>
						<Text style={[style.cell, style.content]}>sur rdv : {sur_rdvRepas}</Text>
					</View>
				)
			}
			else if (sans_rdvRepas != null) {
				return (
					<View style={style.line}>
                        <Text style={[style.cell, style.content3]}>Repas :</Text>
                        <Text style={[style.cell, style.content]}>{Repas}</Text>
                        <Text style={[style.cell, style.content2]}>{droitsRepas}</Text>
						<Text style={[style.cell, style.content]}>sans rdv : {sans_rdvRepas}</Text>

					</View>
				)
			}
			else if (sur_rdvRepas != null) {
				return (
					<View style={style.line}>
                        <Text style={[style.cell, style.content3]}>Repas :</Text>
                        <Text style={[style.cell, style.content]}>{Repas}</Text>
                        <Text style={[style.cell, style.content2]}>{droitsRepas}</Text>
						<Text style={[style.cell, style.content]}>sur rdv : {sur_rdvRepas}</Text>
					</View>
				)
			}
			else {
				return (
					<View style={style.line}>
                        <Text style={[style.cell, style.content3]}>Repas :</Text>
                        <Text style={[style.cell, style.content]}>{Repas}</Text>
                        <Text style={[style.cell, style.content2]}>{droitsRepas}</Text>
					</View>
				)
			}
		}
		else return null;
	}
	affichageServiceDouche(Douche, droitsDouche, sans_rdvDouche, sur_rdvDouche, equipe_mobileDouche) {
		if (Douche != null) {
			if (equipe_mobileDouche != null) {
				return (
					<View style={style.line}>
                        <Text style={[style.cell, style.content3]}>Douche :</Text>
                        <Text style={[style.cell, style.content]}>{Douche}</Text>
                        <Text style={[style.cell, style.content2]}>{droitsDouche}</Text>
						<Text style={[style.cell, style.content]}>Equipe Mobile</Text>
					</View>
				)
			}
			else if (sans_rdvDouche != null && sur_rdvDouche != null) {
				return (
					<View style={style.line}>
                        <Text style={[style.cell, style.content3]}>Douche :</Text>
                        <Text style={[style.cell, style.content]}>{Douche}</Text>
                                            <Text style={[style.cell, style.content2]}>{droitsDouche}</Text>
						<Text style={[style.cell, style.content]}>sans rdv : {sans_rdvDouche}</Text>
						<Text style={[style.cell, style.content]}>sur rdv : {sur_rdvDouche}</Text>
					</View>
				)
			}
			else if (sans_rdvDouche != null) {
				return (
					<View style={style.line}>
                        <Text style={[style.cell, style.content3]}>Douche :</Text>
                        <Text style={[style.cell, style.content]}>{Douche}</Text>
                                            <Text style={[style.cell, style.content2]}>{droitsDouche}</Text>
						<Text style={[style.cell, style.content]}>sans rdv : {sans_rdvDouche}</Text>

					</View>
				)
			}
			else if (sur_rdvDouche != null) {
				return (
					<View style={style.line}>
                        <Text style={[style.cell, style.content3]}>Douche :</Text>
                        <Text style={[style.cell, style.content]}>{Douche}</Text>
                                            <Text style={[style.cell, style.content2]}>{droitsDouche}</Text>
						<Text style={[style.cell, style.content]}>sur rdv : {sur_rdvDouche}</Text>
					</View>
				)
			}
			else {
				return (
					<View style={style.line}>
                        <Text style={[style.cell, style.content3]}>Douche :</Text>
                        <Text style={[style.cell, style.content]}>{Douche}</Text>
                                            <Text style={[style.cell, style.content2]}>{droitsDouche}</Text>
					</View>
				)
			}
		}
		else return null;
	}
	affichageServiceLaverie(Laverie, droitsLaverie, sans_rdvLaverie, sur_rdvLaverie, equipe_mobileLaverie) {
		if (Laverie != null) {
			if (equipe_mobileLaverie != null) {
				return (
					<View style={style.line}>
                        <Text style={[style.cell, style.content3]}>Laverie :</Text>
                        <Text style={[style.cell, style.content]}>{Laverie}</Text>
                                            <Text style={[style.cell, style.content2]}>{droitsLaverie}</Text>
						<Text style={[style.cell, style.content]}>Equipe Mobile</Text>
					</View>
				)
			}
			else if (sans_rdvLaverie != null && sur_rdvLaverie != null) {
				return (
					<View style={style.line}>
                        <Text style={[style.cell, style.content3]}>Laverie :</Text>
                        <Text style={[style.cell, style.content]}>{Laverie}</Text>
                        <Text style={[style.cell, style.content2]}>{droitsLaverie}</Text>
						<Text style={[style.cell, style.content]}>sans rdv : {sans_rdvLaverie}</Text>
						<Text style={[style.cell, style.content]}>sur rdv : {sur_rdvLaverie}</Text>
					</View>
				)
			}
			else if (sans_rdvLaverie != null) {
				return (
					<View style={style.line}>
                        <Text style={[style.cell, style.content3]}>Laverie :</Text>
                        <Text style={[style.cell, style.content]}>{Laverie}</Text>
                        <Text style={[style.cell, style.content2]}>{droitsLaverie}</Text>
						<Text style={[style.cell, style.content]}>sans rdv : {sans_rdvLaverie}</Text>

					</View>
				)
			}
			else if (sur_rdvLaverie != null) {
				return (
					<View style={style.line}>
                        <Text style={[style.cell, style.content3]}>Laverie :</Text>
                        <Text style={[style.cell, style.content]}>{Laverie}</Text>
                        <Text style={[style.cell, style.content2]}>{droitsLaverie}</Text>
						<Text style={[style.cell, style.content]}>sur rdv : {sur_rdvLaverie}</Text>
					</View>
				)
			}
			else {
				return (
					<View style={style.line}>
                        <Text style={[style.cell, style.content3]}>Laverie :</Text>
                        <Text style={[style.cell, style.content]}>{Laverie}</Text>
                        <Text style={[style.cell, style.content2]}>{droitsLaverie}</Text>
					</View>
				)
			}
		}
		else return null;
	}
	affichageServiceBagagerie(Bagagerie, droitsBagagerie, sans_rdvBagagerie, sur_rdvBagagerie, equipe_mobileBagagerie) {
		if (Bagagerie != null) {
			if (equipe_mobileBagagerie != null) {
				return (
					<View style={style.line}>
                        <Text style={[style.cell, style.content3]}>Bagagerie :</Text>
                        <Text style={[style.cell, style.content]}>{Bagagerie}</Text>
                        <Text style={[style.cell, style.content2]}>{droitsBagagerie}</Text>
						<Text style={[style.cell, style.content]}>Equipe Mobile</Text>
					</View>
				)
			}
			else if (sans_rdvBagagerie != null && sur_rdvBagagerie != null) {
				return (
					<View style={style.line}>
                        <Text style={[style.cell, style.content3]}>Bagagerie :</Text>
                        <Text style={[style.cell, style.content]}>{Bagagerie}</Text>
                        <Text style={[style.cell, style.content2]}>{droitsBagagerie}</Text>
						<Text style={[style.cell, style.content]}>sans rdv : {sans_rdvBagagerie}</Text>
						<Text style={[style.cell, style.content]}>sur rdv : {sur_rdvBagagerie}</Text>
					</View>
				)
			}
			else if (sans_rdvBagagerie != null) {
				return (
					<View style={style.line}>
                        <Text style={[style.cell, style.content3]}>Bagagerie :</Text>
                        <Text style={[style.cell, style.content]}>{Bagagerie}</Text>
                        <Text style={[style.cell, style.content2]}>{droitsBagagerie}</Text>
						<Text style={[style.cell, style.content]}>sans rdv : {sans_rdvBagagerie}</Text>

					</View>
				)
			}
			else if (sur_rdvBagagerie != null) {
				return (
					<View style={style.line}>
                        <Text style={[style.cell, style.content3]}>Bagagerie :</Text>
                        <Text style={[style.cell, style.content]}>{Bagagerie}</Text>
                        <Text style={[style.cell, style.content2]}>{droitsBagagerie}</Text>
						<Text style={[style.cell, style.content]}>sur rdv : {sur_rdvBagagerie}</Text>
					</View>
				)
			}
			else {
				return (
					<View style={style.line}>
                        <Text style={[style.cell, style.content3]}>Bagagerie :</Text>
                        <Text style={[style.cell, style.content]}>{Bagagerie}</Text>
                        <Text style={[style.cell, style.content2]}>{droitsBagagerie}</Text>
					</View>
				)
			}
		}
		else return null;
	}
	affichageServiceChenil(Chenil, droitsChenil, sans_rdvChenil, sur_rdvChenil, equipe_mobileChenil) {
		if (Chenil != null) {
			if (equipe_mobileChenil != null) {
				return (
					<View style={style.line}>
                        <Text style={[style.cell, style.content3]}>Chenil :</Text>
                        <Text style={[style.cell, style.content]}>{Chenil}</Text>
                        <Text style={[style.cell, style.content2]}>{droitsChenil}</Text>
						<Text style={[style.cell, style.content]}>Equipe Mobile</Text>
					</View>
				)
			}
			else if (sans_rdvChenil != null && sur_rdvChenil != null) {
				return (
					<View style={style.line}>
                        <Text style={[style.cell, style.content3]}>Chenil :</Text>
                        <Text style={[style.cell, style.content]}>{Chenil}</Text>
                            <Text style={[style.cell, style.content2]}>{droitsChenil}</Text>
						<Text style={[style.cell, style.content]}>sans rdv : {sans_rdvChenil}</Text>
						<Text style={[style.cell, style.content]}>sur rdv : {sur_rdvChenil}</Text>
					</View>
				)
			}
			else if (sans_rdvChenil != null) {
				return (
					<View style={style.line}>
                        <Text style={[style.cell, style.content3]}>Chenil :</Text>
                        <Text style={[style.cell, style.content]}>{Chenil}</Text>
                            <Text style={[style.cell, style.content2]}>{droitsChenil}</Text>
						<Text style={[style.cell, style.content]}>sans rdv : {sans_rdvChenil}</Text>

					</View>
				)
			}
			else if (sur_rdvChenil != null) {
				return (
					<View style={style.line}>
                        <Text style={[style.cell, style.content3]}>Chenil :</Text>
                        <Text style={[style.cell, style.content]}>{Chenil}</Text>
                            <Text style={[style.cell, style.content2]}>{droitsChenil}</Text>
						<Text style={[style.cell, style.content]}>sur rdv : {sur_rdvChenil}</Text>
					</View>
				)
			}
			else {
				return (
					<View style={style.line}>
                        <Text style={[style.cell, style.content3]}>Chenil :</Text>
                        <Text style={[style.cell, style.content]}>{Chenil}</Text>
                                            <Text style={[style.cell, style.content2]}>{droitsChenil}</Text>
					</View>
				)
			}
		}
		else return null;
	}

}

const style = StyleSheet.create({
	container: {
		flex: 1,
		padding: 1,
	},
	cab: {
		flex: 1,
		alignContent: "stretch",
	},
	container4: {
		flex: 1,
		//padding: 1,
	},
	avatar: {
		aspectRatio: 1,
		borderRadius: 200
	},
	detailContainer: {
		marginTop: 5,
		marginLeft: 5,
		marginRight: 5,
		elevation: 1,
		backgroundColor: "#FFFFFF",
	},
detailContainer2: {
    marginTop: 5,
    marginLeft: 5,
    marginRight: 5,
    elevation: 1,
    backgroundColor: "#FFFFFF",
alignItems: 'center',
    

},
	detailLine: {
		paddingLeft: 15,
		paddingRight: 15,
		paddingTop: 10,
		paddingBottom: 10,
		flexDirection: 'column',
		justifyContent: 'space-between',
		alignItems: 'flex-start',
		borderBottomWidth: 1,
		borderColor: '#C5C5C5',

	},
	share_touchable_floatingactionbutton: {
		position: 'absolute',
		width: 60,
		height: 60,
		right: 10,
		bottom: 50,
		borderRadius: 30,
		backgroundColor: '#e91e63',
		justifyContent: 'center',
		alignItems: 'center'
	},
	share_image: {
		width: 30,
		height: 30
	},
	detailTitle: {
		paddingLeft: 15,
		paddingRight: 15,
		paddingTop: 10,
		paddingBottom: 10,
		flexDirection: 'column',
		justifyContent: 'space-between',
		alignItems: 'center',
		borderBottomWidth: 1,
		borderColor: '#C5C5C5'
	},
	cell: {
		fontSize: 15,
		flex: 1,
		flexWrap: 'wrap'
	},
	label: {
		fontWeight: 'bold',
		flex: 3,
		fontSize: 20,
	},
	content: {
		flex: 7,
	},
	content2: {
		//textAlign: 'right',
		flex: 7,
		fontWeight: 'bold',
		color: '#DD614A',
	},
	content3: {
		//textAlign: 'right',
		flex: 7,
		fontWeight: 'bold',
	},
line: {
paddingLeft: 15,
paddingRight: 15,
paddingTop: 10,
paddingBottom: 10,
flexDirection: 'column',
justifyContent: 'space-between',
alignItems: 'center',
borderBottomWidth: 1,
borderColor: '#C5C5C5'

},
	longLabel: {
		fontSize: 20
	}
});
