export function formatarCPF(value: string) {
    let formattedValue = value.replace(/\D/g, '');
    formattedValue = formattedValue.replace(/(\d{3})(\d)/, '$1.$2');
    formattedValue = formattedValue.replace(/(\d{3})(\d)/, '$1.$2');
    formattedValue = formattedValue.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
    return formattedValue;
}

export function dataAtualFormatada() {
    var data = new Date(),
        dia = data.getDate().toString(),
        diaF = (dia.length == 1) ? '0' + dia : dia,
        mes = (data.getMonth() + 1).toString(), //+1 pois no getMonth Janeiro começa com zero.
        mesF = (mes.length == 1) ? '0' + mes : mes,
        anoF = data.getFullYear();
    return diaF + "/" + mesF + "/" + anoF;
}


export function formatLandLineNumber(phoneNumber: string) {
    const cleaned = ('' + phoneNumber).replace(/\D/g, '');
    const match = cleaned.match(/^(\d{2})(\d{0,4})(\d{0,4})$/);

    if (!match) {
        return phoneNumber;
    }

    let formattedNumber = '(' + match[1];
    if (match[2]) {
        formattedNumber += ') ' + match[2];
    }
    if (match[3]) {
        formattedNumber += '-' + match[3];
    }

    return formattedNumber;
}

export function formatMobileNumber(phoneNumber: string) {
    const cleaned = ('' + phoneNumber).replace(/\D/g, '');
    const match = cleaned.match(/^(\d{2})(\d{0,5})(\d{0,4})$/);

    if (!match) {
        return phoneNumber;
    }

    let formattedNumber = '(' + match[1];
    if (match[2]) {
        formattedNumber += ') ' + match[2];
    }
    if (match[3]) {
        formattedNumber += '-' + match[3];
    }

    return formattedNumber;
}


export function maskrg(v: string){
    v=v.replace(/\D/g,"");
    v=v.replace(/(\d{2})(\d{3})(\d{3})(\d{1})$/,"$1.$2.$3-$4");
    return v;
}


