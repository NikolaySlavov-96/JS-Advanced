function editElement(all , secon , news) {

    let line = all.textContent;

    const pattern = new RegExp(secon , 'g');

    // const result = line.split(secon).join(new);

    const result = line.replace(pattern , news);
    
    all.textContent = result;
}