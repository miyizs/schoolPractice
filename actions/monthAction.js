export function chooseMonth(idx) {
    return {
        type:'CHOOSE_MONTH',
        idx
    }
}

export function activeTab(idx){
    return {
        type:'CHOOSE_TAB',
        idx
    }
}

export function seeDetail(status,title,people){
    return {
        type:'CHOOSE_PROJECT',
        status,
        title,
        people
    }
}