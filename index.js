const smileys = [':)', ';(', ';}', ':-D']; 

function countSmileys(arr) {
    let smiles = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == ';)') {
            smiles++;
        }
        if (arr[i] == ':)') {
            smiles++;
        }
        if (arr[i] == ':-)') {
            smiles++;
        }
        if (arr[i] == ':~)') {
            smiles++;
        }
        if (arr[i] == ';~)') {
            smiles++;
        }
        if (arr[i] == ';-)') {
            smiles++;
        }
        if (arr[i] == ';~D') {
            smiles++;
        }
        if (arr[i] == ':D') {
            smiles++;
        }
        if (arr[i] == ';-D') {
            smiles++;
        }
        if (arr[i] == ';D') {
            smiles++;
        }
        if (arr[i] == ':~D') {
            smiles++;
        }
        if (arr[i] == ':-D') {
            smiles++;
        }
    }

    return smiles
}

countSmileys(smileys)