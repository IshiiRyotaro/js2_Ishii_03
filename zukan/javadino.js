

for(let i=0; i < localStorage.length; i++){
    const key = localStorage.key(i);
    const value = localStorage.getItem(key);

    let favoritePageElement = document.createElement('li');
    favoritePageElement.innerHTML = '<a href="' + key + '">' + value + '</a>';
    $("#favlist").append(favoritePageElement);

    $(favoritePageElement).click(function() {
        window.location.href = key;
        return false;
    });
}

$(".clear").on("click",function(){
    localStorage.clear();
    $("#favlist").empty();
    alert('連れていた恐竜たちはすみかに帰っていきました。　　　　　　　　　バイバイ！元気でね！');
});

// document.getElementById('#clear').addEventListener('click', function() {
//     localStorage.clear();
// alert('バイバイ！みんな！');
// });
// $(document).ready(function() {
// })