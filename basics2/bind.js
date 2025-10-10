const user = {
    name: ' zain',
    showName(){
        console.log(this.name);
    }
} 
const copy = user.showName.bind(user);
const copy1 = user.showName.bind(user);
copy();
copy1()