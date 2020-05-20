function changeFontSize(el, sizeFormat) {
    document.getElementById(el).className = sizeFormat;
    document.getElementById("fontSize").value = sizeFormat;
}

function stopLoader() {
    const content = document.querySelector('.js-content');
    const spinner = content.querySelector('.js-loading-spinner');
    const button = content.querySelector('.js-spinner-button');
    const pauseClass  = 'paused';

    if(spinner.classList.contains(pauseClass)) {
        spinner.classList.remove(pauseClass); 
        button.innerHTML = 'Pause spinner';
    } else {
        spinner.classList.add(pauseClass);    
        button.innerHTML = 'Play spinner';
    }
}

String.prototype.replaceAll = function(search, replacement) {
    let target = this;
    return target.replace(new RegExp(search, 'g'), replacement);
};

(function() {
	
	function toJSONString( form ) {
		const obj = {};
		const elements = form.querySelectorAll( "input, select" );
		for( let i = 0; i < elements.length; ++i ) {
			const element = elements[i];
			const name = element.name;
			const value = element.value;
			if( name ) {
				obj[ name ] = value;
			}
		}
		return JSON.stringify( obj );
	}

	document.addEventListener( "DOMContentLoaded", function() {
		const form = document.getElementById( "signupForm" );	
		form.addEventListener( "submit", function( e ) {
			e.preventDefault();
			openDialog('dialog', this);
			const json = toJSONString( this ).replaceAll(',', ',\n');
			setTimeout(function showResultValues() {
				document.getElementById('spinnerSection').setAttribute("hidden", "");
				const codeSection = document.createElement('pre');
				document.getElementById('codeWrapper').appendChild(codeSection);
				codeSection.innerHTML = json;
			}, 5000);
		}, false);
    });

})();
