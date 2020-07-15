 var ShuffleFunc = () => {
	window.addEventListener('DOMContentLoaded', () => {
        generateBlocks('sort');
        const shuffleBtn = document.querySelector('.shuffle-btn'),
            sortBtn = document.querySelector('.sort-btn');

		shuffleBtn.addEventListener('click', () => {
			generateBlocks('random');
		});
		sortBtn.addEventListener('click', () => {
			generateBlocks('sort');
		});		
	});
	
	const generateBlocks = (mode) => {
        const count = 9;
		let block = '',
			tempArray = [],
			number = 0;
		
		while(tempArray.length < count){
			(mode === 'sort') ? number = tempArray.length + 1 : number = (Math.ceil(Math.random() * count));
			if(tempArray.indexOf(number) === -1 ) {
				block += '<div class="blocks blocks_' + number + '">' + number + '</div>';
				tempArray.push(number);
			}
		}
		document.querySelector('.block-container').innerHTML = block;
	}
}
ShuffleFunc();