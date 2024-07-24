function formValidation() {
			var uid = document.getElementById('exampleInputEmail1').value;
			var passid = document.getElementById('exampleInputPassword1').value;

			if(userid_validation(uid)) {
				if(passid_validation(passid, 7, 12)) {
					return true;
				}
			}
			return false;
		}

function userid_validation(uid) {
			var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
			if(uid.match(mailformat)) {
				return true;
			} else {
				alert("You have entered an invalid email address!");
				document.getElementById('exampleInputEmail1').focus();
				return false;
			}
		}

function passid_validation(passid, mx, my) {
			var passid_len = passid.length;
			if (passid_len == 0 || passid_len >= my || passid_len < mx) {
				alert("Password should not be empty / length should be between "+mx+" to "+my);
				document.getElementById('exampleInputPassword1').focus();
				return false;
			}
			return true;
		}