export default function decorate(block) {
	console.log(block);
	alert('kaise ho')
	const rows = [...block.childern];
	rows.forEach((item, index) => {
		console.log(item);
	});
}