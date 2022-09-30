var working = false;
$('.login').on('submit', function(e) {
  e.preventDefault();
  if (working) return;
  working = true;
  var $this = $(this),
    $state = $this.find('button > .state');
  $this.addClass('loading');
  $state.html('Authenticating');
  setTimeout(function() {
	var username = $("#username").val();
	var password = $("#password").val();
	if(hex_md5(username) == '05f59f175b8961c00305e4ee7c88f9f2' 
		&& hex_md5(password) =='eee84d9f5dc797694eac427f5f0784f7'){
		$this.addClass('ok');
		$state.html('Welcome back!');
		location.href='/love.html';
	}else{
		setTimeout(function() {
		  $state.html('Log in');
		  $this.removeClass('ok loading');
		  working = false;
		}, 4000);
		
	}
  }, 3000);
});