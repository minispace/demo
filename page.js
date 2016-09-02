//分页demo
            function pages(){
                pages.prototype.pageIndex=1;//当前页
                pages.prototype.pageSize=10;//页大小
                pages.prototype.totalPage = 1;//总页数
                //必要初始化内容
                pages.prototype.init = function (size, count) {                    
                    this.pageSize = size;
                    this.totalPage = Math.ceil(count / this.pageSize);
                    this.pageIndex = 1;
                }
                pages.prototype.setPageSize = function (size) {
                    this.pageSize = size;
                }
                pages.prototype.setCount = function (count) {
                    this.totalPage = Math.ceil(count /this.pageSize);
                }
                pages.prototype.setCount = function (total) {
                    this.totalPage = total;
                }
                //选择第几页
                pages.prototype.setPageIndex = function (index) {
                    this.pageIndex = index;
                }
                //向前翻页
                pages.prototype.prePage = function () {
                    if (this.pageIndex != 1) {
                        pageIndex --;
                    }                    
                }
                //向后翻页
                pages.prototype.nextPage = function () {
                    
                    if (this.pageIndex !== this.totalPage) {
                        this.pageIndex ++;
                    }
                }
                //第一页
                pages.prototype.firstPage = function () {
                    if (this.pageIndex != this.totalPage) {
                        pageIndex++;
                    }
                }
                //最后一页
                pages.prototype.lastPage = function () {
                    if (this.pageIndex != this.totalPage) {
                        pageIndex++;
                    }
                }
}