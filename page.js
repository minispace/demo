//minispace的分页demo
function pages() {
	pages.prototype.pageIndex = 1; //当前页
	pages.prototype.pageSize = 10; //页大小
	pages.prototype.totalPage = 1; //总页数
	//必要初始化内容
	//传入参数每页显示条数和总条数
	pages.prototype.init = function(size, count) {
			this.pageSize = size;
			this.totalPage = Math.ceil(count / this.pageSize);
			if(this.totalPage == 0)
				this.totalPage = 1;
			this.pageIndex = 1;
		}
		//设置页面显示条数
	pages.prototype.setPageSize = function(size) {
			this.pageSize = size;
		}
		//设置总条数
	pages.prototype.setCount = function(count) {
		this.totalPage = Math.ceil(count / this.pageSize);
	}
	pages.prototype.setTotal = function(total) {
			this.totalPage = total;
		}
		//选择第几页
	pages.prototype.setPageIndex = function(index) {
			this.pageIndex = index;
		}
		//向前翻页
	pages.prototype.prePage = function() {
			if(this.pageIndex != 1) {
				this.pageIndex--;
			} else {
				return false;
			}
		}
		//向后翻页
	pages.prototype.nextPage = function() {
			if(this.pageIndex !== this.totalPage) {
				this.pageIndex++;
			} else {
				return false;
			}
		}
		//第一页
	pages.prototype.firstPage = function() {
			this.pageIndex = 1;
		}
		//最后一页
	pages.prototype.lastPage = function() {
		this.pageIndex = this.totalPage;
	}
}
