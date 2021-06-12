
// function openFileIIs(filename){        
//     try{ 
//         var obj=new ActiveXObject("Scripting.FileSystemObject"); 
//         console.log('zyw    , ', obj)
//         if(obj){ 
//             obj.Run("\""+filename+"\"", 1, false );
//             obj.run("osk");/*打开屏幕键盘*/                                                                                                                                                     
//             obj.Run('"'+filename+'"'); 
//             obj=null; 
//         } 
//     }
//     catch(e){ 
//         alert("请确定是否存在该盘符或文件"); 
//     } 
    
// }


// openFileIIs()
window.onload = function() {
    data = [
        {
            bookName: "chinese",
            path: './books/chinese.pdf',
        }, 
        {
            bookName: "math",
            path: './books/math.docx'
        }, 
        {
            bookName: "部落冲突",
            path: './books/部落冲突.pdf'
        }, 
        {
            bookName: "csgo",
            path: './books/csgo.pdf'
        }, 
        {
            bookName: "皇室战争",
            path: './books/皇室战争.pdf'
        }, 
        {
            bookName: "海岛奇兵",
            path: './books/海岛奇兵.pdf'
        }, 
        {
            bookName: "炉石传说",
            path: './books/炉石传说.pdf'
        }, 
        {
            bookName: "虎牙直播",
            path: './books/虎牙直播.pdf'
        }, 
        {
            bookName: "使命召唤",
            path: './books/使命召唤.pdf'
        }, 
        {
            bookName: "王者荣耀",
            path: './books/王者荣耀.pdf'
        }, 
        {
            bookName: "我的世界",
            path: './books/我的世界.pdf'
        }, 
        {
            bookName: "植物大战僵尸",
            path: './books/植物大战僵尸.pdf'
        }, 
        {
            bookName: "computer science",
            path: './books/computer science.pdf'
        }, 
        {
            bookName: "English",
            path: './books/English.pdf'
        }, 
        {
            bookName: "worldHistory",
            path: './books/worldHistory.docx'
        }, 
        {
            bookName: "worldHistory1",
            path: './books/worldHistory1.pdf'
        }, 
        {
            bookName: "worldHistory2",
            path: './books/worldHistory2.pdf'
        }, 
        {
            bookName: "worldHistory3",
            path: './books/worldHistory3.pdf'
        }, 
        {
            bookName: "worldHistory4",
            path: './books/worldHistory4.pdf'
        }, 
        {
            bookName: "worldHistory5",
            path: './books/worldHistory5.pdf'
        }, 
        {
            bookName: "worldHistory6",
            path: './books/worldHistory6.pdf'
        }, 
        {
            bookName: "worldHistory7",
            path: './books/worldHistory7.docx'
        }
    ]

    data.sort(sortFunction('bookName'));

    createHtmlContent()
    
}



var createHtmlContent = () => {
    for(var i = 0; i < data.length; i++) {
        document.getElementById('list').innerHTML = document.getElementById('list').innerHTML + 
            '<a href="'+data[i].path+'">'+data[i].bookName+'</a> </br>'
    }
}

var sortFunction = (property) => {
    return function (a, b) {
        return a[property].localeCompare(b[property], 'zh-CN')
        // return a[property].charCodeAt(0) - b[property].charCodeAt(0) 
    } 
}

var searchBook = () => {
    var searchKeyWord = document.getElementById("userInput").value; 
    newData = filterData(searchKeyWord, data);
    updateHtmlContent(newData)
    
    console.log('hi I clicked', searchKeyWord)
}

var updateHtmlContent = (newData) => {
    document.getElementById('list').innerHTML = ''
    for(var i = 0; i < newData.length; i++) {
        document.getElementById('list').innerHTML = document.getElementById('list').innerHTML + 
            '<a href="'+newData[i].path+'">'+newData[i].bookName+'</a> </br>'
    }
}

var filterData = (keyword, oldData) => {
    return oldData.filter(item=>item.bookName.toUpperCase().indexOf(keyword.toUpperCase())>-1)
}

var updateEvent = (event) => {
    if(event.key == 'Enter') {
        searchBook()
    }
}