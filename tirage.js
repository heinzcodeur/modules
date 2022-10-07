export function faireTirage(tab) {
    tab.forEach((val,ind,tab) => {
        Math.random() > 0.5 ?  tab[ind] = true : tab[ind] = false ;
    })
}