export default function decorate(block) {
	const rows = [...block.children];
	rows.forEach((item, index) => {
		console.log(item);
	})
}