function constructionCrew (obj) {

    if(obj.dizziness){

        obj.levelOfHydrated += obj.weight * obj.experience * 0.1;
        obj.dizziness = false;
    }

    return obj;
}

constructionCrew ({ weight: 80,
    experience: 1,
    levelOfHydrated: 10,
    dizziness: true })