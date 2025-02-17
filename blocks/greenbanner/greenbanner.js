export default function decorate(block) {
	const rows = [...block.children];
	if(block.classList.contains('version2')){
		alert('version2');
	}else{
		alert('Normal');
	}
}