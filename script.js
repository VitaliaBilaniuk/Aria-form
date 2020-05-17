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

(function() {
	function toJSONString( form ) {
		var obj = {};
		var elements = form.querySelectorAll( "input, select" );
		for( var i = 0; i < elements.length; ++i ) {
			var element = elements[i];
			var name = element.name;
			var value = element.value;
			if( name ) {
				obj[ name ] = value;
			}
		}
		return JSON.stringify( obj );
	}

	document.addEventListener( "DOMContentLoaded", function() {
		var form = document.getElementById( "signupForm" );
		form.addEventListener( "submit", function( e ) {
			e.preventDefault();
			var json = toJSONString( this );
            console.log(json, 'form fields values');
		}, false);

    });

})();
