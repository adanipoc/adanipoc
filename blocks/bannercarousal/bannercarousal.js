export default function decorate(block) {
	const rows = [...block.childern];
	rows.forEach((item, index) => {
		console.log(item);
	});
}