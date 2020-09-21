/*
affichageServices(ConsultSpe2, droitsConsultSpe2) {
    //if ConsultSpe2 != null condition appel de la
    return (
        <View> 
            <Text style={[style.cell, style.content]}>Spécialistes :{ConsultSpe2}</Text>
            <Text style={[style.cell, style.content]}>Droits :{droitsConsultSpe2}</Text>
            <Text style={[style.cell, style.content]}> {this.fct_infosConsultSpe2}</Text>
        </View>
    )
}
fct_infosConsultSpe2(sans_rdvConsultSpe2, sur_rdvConsultSpe2, equipe_mobileConsultSpe2) {

    if (equipe_mobileConsultSpe2 != null) {
        return <Text >EQUIPE MOBILE</Text>
    }
    else if (sans_rdvConsultSpe2 == 'Oui') {
        return <Text>sans rendez vous</Text>
    }
    else if (sans_rdvConsultSpe2 != null && sans_rdvConsultSpe2 != 'Oui') {
        return <Text > {sans_rdvConsultSpe2}</Text>
    }
    else if (sur_rdvConsultSpe2 == 'Oui') {
        return <Text>sans rendez vous</Text>
    }
    else if (sur_rdvConsultSpe2 != null && sur_rdvConsultSpe2 != 'Oui') {
        return <Text > {sur_rdvConsultSpe2}</Text>
    }
}
*/