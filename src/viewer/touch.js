JSM.Touch = function ()
{
	this.down = false;
	this.prevX = 0;
	this.prevY = 0;
	this.currX = 0;
	this.currY = 0;
	this.diffX = 0;
	this.diffY = 0;
};

JSM.Touch.prototype = 
{
	Start : function (event, div)
	{
		var eventParameters = event;
		if (eventParameters === undefined) {
			eventParameters = window.event;
		}
		
		if (event.touches.length === 0) {
			return;
		}
		var touch = event.touches[0];

		this.down = true;
		this.prevX = touch.pageX;
		this.prevY = touch.pageY;
		if (div !== undefined) {
			this.prevX = touch.prevX - div.offsetLeft;
			this.prevY = touch.prevX - div.offsetTop;
		}
	},

	Move : function (event, div)
	{
		var eventParameters = event;
		if (eventParameters === undefined) {
			eventParameters = window.event;
		}
		
		if (event.touches.length === 0) {
			return;
		}
		var touch = event.touches[0];

		this.currX = touch.pageX;
		this.currY = touch.pageY;
		if (div !== undefined) {
			this.currX = touch.currX - div.offsetLeft;
			this.currY = touch.currY - div.offsetTop;
		}
		this.diffX = this.currX - this.prevX;
		this.diffY = this.currY - this.prevY;
		this.prevX = this.currX;
		this.prevY = this.currY;
	},
	
	End : function (event, div)
	{
		var eventParameters = event;
		if (eventParameters === undefined) {
			eventParameters = window.event;
		}
		
		this.down = false;
	}
};
