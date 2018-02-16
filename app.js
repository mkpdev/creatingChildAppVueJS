// demo data
var data = {
	name: '',
	children: [{
    	name: '',
    	children: []
  }]
}

Vue.component('modal', {
	template: '#modal-template',
	methods: {
		useMethods: function () {
			// component('item').toggle()
		}
	}
})

Vue.component('item', {
	template: '#item-template',
	props: {
  	model: Object
	},
	data: function () {
  	return {
  		open: false,
  		showModal: false
  	}
	},	
	// ready: function () {
 //    this.toggle();
 //    this.changeType();
 //    this.addChild();
 //  },
	methods: {
  	toggle: function () {
     	this.open = !this.open
  	},
  	changeType: function () {
    	Vue.set(this.model, 'children', [])
    	this.open = true
  	},
  	addChild: function () {
  		this.model.children.push({
    		name: ''
  		},{
    		name: ''
  		})
  	},
  	addActionChild: function () {
  		this.model.children.push({
    		name: ''
  		})
  	}
	}
})

var demo = new Vue({
	el: '#demo',
	data: {
  	treeData: data
	}
})
