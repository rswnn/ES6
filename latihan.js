var todoController = (function() {
	var Description = function(id, description) {
		this.id = id;
		this.description = description;
	}

	var data = {
		descript: []
	}

	return {
		addItem: function(des) {
			var newItem, cek, ID;
			if (data.descript.length >0) {
				ID = data.descript[data.descript.length -1].id + 1;
			} else {
				ID = 0;
			}

			newItem = new Description(ID, des);

			data.descript.push(newItem);

			return newItem;
		},
		deleteItem: function(id) {
			var ids, index;

			ids = data.descript.map(function(cur) {
				return cur.id;
			})

			index = ids.indexOf(id);

			if (index !== -1) {
				data.descript.splice(index, 1);
			}
		},
		tester : function () {
			console.log(data);
		}
	}
})();


var UIController = (function() {
	var DOM = {
		description: '.text_description',
		input: '.input',
		container: '.container',
		hapus: '.hapus',
		dua: '.dua'
	}
	return {
		getInput: function() {
			return {
				description: document.querySelector(DOM.description).value
			}
		},
		addItem: function(obj) {
			var html, newHtml;

			html = '<div id="des-%id%" class="todo">%des% <button class="hapus" type="checkbox"></button></div>';

			newHtml = html.replace('%des%', obj.description);
			newHtml = newHtml.replace('%id%', obj.id);

			document.querySelector(DOM.dua).insertAdjacentHTML('beforeend', newHtml);
		},
		clearFields: function() {
			var fields, fieldsArr;
			fields = document.querySelectorAll(DOM.description );
			fieldsArr = Array.prototype.slice.call(fields);
			
			fieldsArr.forEach(function(current, index, array){
				current.value = "";
			});
			fieldsArr[0].focus();
		},
		deleteListItem: function(element) {
		var el = document.getElementById(element);
		el.parentNode.removeChild(el);
		},
		getDOMString: function() {
			return DOM;
		}
	}
})();




var controller = (function(Uictrl,todoctrl) {

	var setupListener = function(){
		var DOMctrl = Uictrl.getDOMString();


	document.querySelector(DOMctrl.input).addEventListener('click', function() {
		addItem();
	});
	document.addEventListener('keypress', function(e) {
		if(e.keyCode === 13 || e.which === 13) {
			addItem();
		}
	  })
	document.querySelector(DOMctrl.dua).addEventListener('click', delItem);
	}
	
	var addItem = function() {
		var newItem;
		var input = Uictrl.getInput();
		if (input.description !== "") {
			newItem = todoctrl.addItem(input.description);
			Uictrl.clearFields();
			Uictrl.addItem(newItem);
		}
	}
	var delItem = function(e) {
		var idDel, element, type;
		var idDel = e.target.parentNode.id;
		if (idDel) {
			element = idDel.split('-');
			type = element[1];
			todoctrl.deleteItem(parseInt(type));
		} else {
			return null;
		}
		Uictrl.deleteListItem(idDel);
	};
	return {
		init: function() {
			setupListener();
		} 
	}

	
})(UIController, todoController);

controller.init()
