//#region : callback
// function testLog(){
// 	setTimeout(() => console.log('111'), 3000 )
// }
// testLog()
//#endregion

//#region : httpGetAsync truyền vào url và callback
// function httpGetAsync(Url, callback) {
// 	var xmlHtpp = new XMLHttpRequest();
// 	xmlHtpp.onreadystatechange = function () {
// 		if (xmlHtpp.readyState == 4 && xmlHtpp.status == 200)
// 			callback(xmlHtpp)
// 	};
// 	xmlHtpp.open("GET", Url, true);
// 	xmlHtpp.send(null)
// }
//#endregion

//#region : sử dụng httpGetAsync
// httpGetAsync('https://picsum.photos/200/300', (data) => {
// 	console.log(data);
// 	document.getElementById('img1').setAttribute('src', data.responseURL)
// 	document.getElementById('div1').setAttribute('class', 'content')

// 	httpGetAsync('https://picsum.photos/200/300', (data) => {
// 		document.getElementById('img2').setAttribute('src', data.responseURL)
// 	})
// });
//#endregion

//#region : tạo promise
// const funcPromise = new Promise((resolve, reject) => {
// 	var condition = true;
// 	// var condition = false; -> test case false
// 	if (condition) {
// 		setTimeout(() => {
// 			resolve('success')
// 		}, 3000)
// 	}
// 	else {
// 		reject('error')
// 	}
// })
//#endregion

//#region : sử dụng promise
// func.then -> nhận vào function trả về kết quả thành công

// funcPromise.then((data) => {
// 	console.log(data);
// }).catch((err) => {
// 	console.log(err);
// })
//#endregion

//#region : khởi tạo httpGetAsync2 gọi API, truyền vào url và resolve
function httpGetAsync2(Url, resolve) {
	var xmlHtpp = new XMLHttpRequest();
	xmlHtpp.onreadystatechange = function () {
		if (xmlHtpp.readyState == 4 && xmlHtpp.status == 200)
			resolve(xmlHtpp)
	};
	xmlHtpp.open("GET", Url, true);
	xmlHtpp.send(null)
}

const block1 = new Promise((resolve, reject) => {
	httpGetAsync2('https://picsum.photos/200/300', resolve);
});
const block2 = new Promise((resolve, reject) => {
	httpGetAsync2('https://picsum.photos/200/300', resolve);
});
//#endregion

//#region : sử dụng các block với then, block này trả về kết quả thành công sẽ thực hiện đến block khác
// block này đang ở cấp độ global

// block1.then((data)=>{
// 	document.getElementById('img3').setAttribute('src', data.responseURL)

// 	return block2
// }).then((data)=>{
// 	document.getElementById('img4').setAttribute('src', data.responseURL)
// }).catch((err)=>{
// 	console.error(err)
// })
//#endregion

//#region : async await (code bất đồng bộ trông như code đồng bộ)
// vì block đang ở cấp độ global nên ko sử dụng dc với async await nên phải bọc block trong function ()=>{} và phía trước phải có async

const executeAsync = async () => {
	// đợi block này resolve thành công thì sẽ thực thi block kia
	// await block1 
	// await block2
	try {
		const a1 = await block1;
		console.log({ a1 });
		document.getElementById('img3').setAttribute('src', a1.responseURL);

		const a2 = await block2;
		console.log({ a2 });
		document.getElementById('img4').setAttribute('src', a2.responseURL);
	} catch (error) {
		console.log({ error })
	}
}
executeAsync()
//#endregion
