(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _todo_todo_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./todo/todo.component */ "./src/app/todo/todo.component.ts");
/* harmony import */ var _task_add_task_add_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./task-add/task-add.component */ "./src/app/task-add/task-add.component.ts");
/* harmony import */ var _task_view_task_view_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./task-view/task-view.component */ "./src/app/task-view/task-view.component.ts");
/* harmony import */ var _task_edit_task_edit_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./task-edit/task-edit.component */ "./src/app/task-edit/task-edit.component.ts");







var routes = [
    {
        // contains the whole todo list
        path: 'tasks',
        component: _todo_todo_component__WEBPACK_IMPORTED_MODULE_3__["TodoComponent"]
    },
    {
        // display the form to add a new task
        path: 'tasks/add',
        component: _task_add_task_add_component__WEBPACK_IMPORTED_MODULE_4__["TaskAddComponent"],
        data: { title: 'Add new task' }
    },
    {
        // display the form to add a new task
        path: 'tasks/:id',
        component: _task_view_task_view_component__WEBPACK_IMPORTED_MODULE_5__["TaskViewComponent"],
        data: { title: 'Task to do' }
    },
    {
        // display the form to add a new task
        path: 'tasks/:id/edit',
        component: _task_edit_task_edit_component__WEBPACK_IMPORTED_MODULE_6__["TaskEditComponent"],
        data: { title: 'Task edition' }
    },
    // Always go on /tasks path
    { path: '',
        redirectTo: '/tasks',
        pathMatch: 'full'
    },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1 {\r\n  color: #369;\r\n  font-family: Arial, Helvetica, sans-serif;\r\n  font-size: 250%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gseUNBQXlDO0VBQ3pDLGVBQWU7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImgxIHtcclxuICBjb2xvcjogIzM2OTtcclxuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDI1MCU7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <h1>My Todo list application</h1>\r\n  <router-outlet>\r\n  </router-outlet>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'todo-list';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _todo_todo_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./todo/todo.component */ "./src/app/todo/todo.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _task_edit_task_edit_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./task-edit/task-edit.component */ "./src/app/task-edit/task-edit.component.ts");
/* harmony import */ var _task_view_task_view_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./task-view/task-view.component */ "./src/app/task-view/task-view.component.ts");
/* harmony import */ var _task_add_task_add_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./task-add/task-add.component */ "./src/app/task-add/task-add.component.ts");










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _todo_todo_component__WEBPACK_IMPORTED_MODULE_5__["TodoComponent"],
                _task_edit_task_edit_component__WEBPACK_IMPORTED_MODULE_7__["TaskEditComponent"],
                _task_view_task_view_component__WEBPACK_IMPORTED_MODULE_8__["TaskViewComponent"],
                _task_add_task_add_component__WEBPACK_IMPORTED_MODULE_9__["TaskAddComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/shared/models/task.model.ts":
/*!*********************************************!*\
  !*** ./src/app/shared/models/task.model.ts ***!
  \*********************************************/
/*! exports provided: Task */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Task", function() { return Task; });
var Task = /** @class */ (function () {
    function Task(title, note, id) {
        if (title === void 0) { title = ''; }
        if (note === void 0) { note = ''; }
        if (id === void 0) { id = null; }
        this.title = title;
        this.note = note;
        this.id = id;
    }
    return Task;
}());



/***/ }),

/***/ "./src/app/task-add/task-add.component.css":
/*!*************************************************!*\
  !*** ./src/app/task-add/task-add.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Rhc2stYWRkL3Rhc2stYWRkLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/task-add/task-add.component.html":
/*!**************************************************!*\
  !*** ./src/app/task-add/task-add.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Create a new task</h2>\r\n\r\n<form>\r\n  <div class=\"form-group\">\r\n    <label for=\"taskTitle\">Title</label>\r\n    <input type=\"text\" id=\"taskTitle\" class=\"form-control\" [formControl]=\"title\">\r\n  </div>\r\n\r\n  <div class=\"form-group\">\r\n    <label for=\"taskNote\">Note</label>\r\n    <input type=\"text\" id=\"taskNote\" class=\"form-control\" [formControl]=\"note\">\r\n  </div>\r\n\r\n  <div class=\"form-group\">\r\n    <button (click)=\"createTask()\" class=\"btn btn-primary\">Create</button>\r\n    <button class=\"btn btn-light\" [routerLink]=\"['/tasks']\">Back</button>\r\n  </div>\r\n</form>\r\n"

/***/ }),

/***/ "./src/app/task-add/task-add.component.ts":
/*!************************************************!*\
  !*** ./src/app/task-add/task-add.component.ts ***!
  \************************************************/
/*! exports provided: TaskAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskAddComponent", function() { return TaskAddComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _task_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../task-storage.service */ "./src/app/task-storage.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var TaskAddComponent = /** @class */ (function () {
    function TaskAddComponent(storage, router) {
        this.storage = storage;
        this.router = router;
        /**
         * Task title form field
         */
        this.title = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('');
        /**
         *  Task note form field
         */
        this.note = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('');
    }
    /**
     * Create a task a redirect to the todo list
     */
    TaskAddComponent.prototype.createTask = function () {
        this.storage.add(this.title.value, this.note.value);
        this.router.navigate(['/tasks']);
    };
    TaskAddComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-task-add',
            template: __webpack_require__(/*! ./task-add.component.html */ "./src/app/task-add/task-add.component.html"),
            styles: [__webpack_require__(/*! ./task-add.component.css */ "./src/app/task-add/task-add.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_task_storage_service__WEBPACK_IMPORTED_MODULE_3__["TaskStorageService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], TaskAddComponent);
    return TaskAddComponent;
}());



/***/ }),

/***/ "./src/app/task-edit/task-edit.component.css":
/*!***************************************************!*\
  !*** ./src/app/task-edit/task-edit.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Rhc2stZWRpdC90YXNrLWVkaXQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/task-edit/task-edit.component.html":
/*!****************************************************!*\
  !*** ./src/app/task-edit/task-edit.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Edit your task</h2>\r\n\r\n<form>\r\n  <div class=\"form-group\">\r\n    <label for=\"taskTitle\">Title</label>\r\n    <input type=\"text\" id=\"taskTitle\" class=\"form-control\" [formControl]=\"title\">\r\n  </div>\r\n\r\n  <div class=\"form-group\">\r\n    <label for=\"taskNote\">Note</label>\r\n    <input type=\"text\" id=\"taskNote\" class=\"form-control\" [formControl]=\"note\">\r\n  </div>\r\n\r\n  <div class=\"form-group\">\r\n    <button (click)=\"updateTask()\" class=\"btn btn-primary\">Update</button>\r\n    <button class=\"btn btn-light\" [routerLink]=\"['/tasks']\">Cancel</button>\r\n  </div>\r\n</form>\r\n"

/***/ }),

/***/ "./src/app/task-edit/task-edit.component.ts":
/*!**************************************************!*\
  !*** ./src/app/task-edit/task-edit.component.ts ***!
  \**************************************************/
/*! exports provided: TaskEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskEditComponent", function() { return TaskEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _task_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../task-storage.service */ "./src/app/task-storage.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var TaskEditComponent = /** @class */ (function () {
    function TaskEditComponent(storage, route, router) {
        this.storage = storage;
        this.route = route;
        this.router = router;
        /**
         * Task title form field
         */
        this.title = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('');
        /**
         *  Task note form field
         */
        this.note = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('');
    }
    /**
     * Load tasks on init
     */
    TaskEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap.subscribe(function (params) {
            _this.task = _this.storage.get(params.get('id'));
            _this.id = _this.task.id;
            _this.note.setValue(_this.task.note);
            _this.title.setValue(_this.task.title);
        });
    };
    /**
     * Update the task and return to the list
     */
    TaskEditComponent.prototype.updateTask = function () {
        this.task = this.storage.update(this.id, this.title.value, this.note.value);
        this.router.navigate(['/tasks']);
    };
    TaskEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-task-edit',
            template: __webpack_require__(/*! ./task-edit.component.html */ "./src/app/task-edit/task-edit.component.html"),
            styles: [__webpack_require__(/*! ./task-edit.component.css */ "./src/app/task-edit/task-edit.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_task_storage_service__WEBPACK_IMPORTED_MODULE_3__["TaskStorageService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], TaskEditComponent);
    return TaskEditComponent;
}());



/***/ }),

/***/ "./src/app/task-storage.service.ts":
/*!*****************************************!*\
  !*** ./src/app/task-storage.service.ts ***!
  \*****************************************/
/*! exports provided: TaskStorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskStorageService", function() { return TaskStorageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _assets_todo_list_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/todo-list.json */ "./src/assets/todo-list.json");
var _assets_todo_list_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../assets/todo-list.json */ "./src/assets/todo-list.json", 1);
/* harmony import */ var _app_shared_models_task_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app/shared/models/task.model */ "./src/app/shared/models/task.model.ts");




var TaskStorageService = /** @class */ (function () {
    function TaskStorageService() {
        this.tasks = [];
        /**
         * Whether data have already been loaded from storage
         */
        this.initialized = false;
    }
    /**
     * Returns all tasks
     */
    TaskStorageService.prototype.getTasks = function () {
        this.init();
        return this.tasks;
    };
    /**
     * Remove the tasks from the list
     *
     * @param index task index to remove
     */
    TaskStorageService.prototype.delete = function (id) {
        var remaining_tasks = [];
        for (var i = 0; i < this.tasks.length; i++) {
            var current_task = this.tasks[i];
            // we found the task to remove, we do not include it in our new array
            if (id == current_task.id) {
                console.log('Skipping tash[' + current_task.title + ']');
                continue;
            }
            remaining_tasks.push(this.tasks[i]);
        }
        this.tasks = remaining_tasks;
        return true;
    };
    /**
     * Return the task based in the given id
     *
     * @param id
     */
    TaskStorageService.prototype.get = function (id) {
        this.init();
        for (var i = 0; i < this.tasks.length; i++) {
            var task = this.tasks[i];
            // we found the task to remove, we do not include it in our new array
            if (task.id != id) {
                continue;
            }
            return task;
        }
        return null;
    };
    /**
     * Create a new task based on the given data (+ generate a new id)
     * @param title
     * @param note
     */
    TaskStorageService.prototype.add = function (title, note) {
        var task = new _app_shared_models_task_model__WEBPACK_IMPORTED_MODULE_3__["Task"](title, note, this.getHighestId() + 1);
        this.tasks.push(task);
    };
    /**
     * Update the task and return it
     *
     * @param id
     * @param title
     * @param note
     *
     * @return Task
     */
    TaskStorageService.prototype.update = function (id, title, note) {
        var task = this.get(id);
        task.title = title;
        task.note = note;
        return task;
    };
    /**
     * Load tasks from json file
     */
    TaskStorageService.prototype.init = function () {
        if (this.initialized) {
            console.log('Already initialized');
            return;
        }
        console.log('Loading data from json file');
        for (var i = 0; i < _assets_todo_list_json__WEBPACK_IMPORTED_MODULE_2__["init_tasks"].length; i++) {
            this.tasks.push(new _app_shared_models_task_model__WEBPACK_IMPORTED_MODULE_3__["Task"](_assets_todo_list_json__WEBPACK_IMPORTED_MODULE_2__["init_tasks"][i]['title'], _assets_todo_list_json__WEBPACK_IMPORTED_MODULE_2__["init_tasks"][i]['note'], _assets_todo_list_json__WEBPACK_IMPORTED_MODULE_2__["init_tasks"][i]['id']));
        }
        this.initialized = true;
    };
    /**
     * Returns highest task id from our list.
     */
    TaskStorageService.prototype.getHighestId = function () {
        var highest = 0;
        this.init();
        this.tasks.forEach(function (current_task) {
            if (current_task.id < highest) {
                return;
            }
            highest = current_task.id;
        });
        return highest;
    };
    TaskStorageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TaskStorageService);
    return TaskStorageService;
}());



/***/ }),

/***/ "./src/app/task-view/task-view.component.css":
/*!***************************************************!*\
  !*** ./src/app/task-view/task-view.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Rhc2stdmlldy90YXNrLXZpZXcuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/task-view/task-view.component.html":
/*!****************************************************!*\
  !*** ./src/app/task-view/task-view.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\" style=\"width: 18rem;\">\r\n  <div class=\"card-body\">\r\n    <h5 class=\"card-title\">Task #{{task.id}}</h5>\r\n    <h6 class=\"card-subtitle mb-2 text-muted\">{{task.title}}Card subtitle</h6>\r\n    <p class=\"card-text\">{{task.note}}</p>\r\n\r\n    <button (click)=\"delete(task.id)\" class=\"btn btn-danger\">Task done !</button>\r\n\r\n    <button class=\"btn btn-light\" [routerLink]=\"['/tasks']\">Back</button>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/task-view/task-view.component.ts":
/*!**************************************************!*\
  !*** ./src/app/task-view/task-view.component.ts ***!
  \**************************************************/
/*! exports provided: TaskViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskViewComponent", function() { return TaskViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _task_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../task-storage.service */ "./src/app/task-storage.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var TaskViewComponent = /** @class */ (function () {
    function TaskViewComponent(storage, route, router) {
        this.storage = storage;
        this.route = route;
        this.router = router;
    }
    /**
     *  Load task from route id parameter
     */
    TaskViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap.subscribe(function (params) {
            _this.task = _this.storage.get(params.get('id'));
        });
    };
    /**
     * Remove the task from the list
     *
     * @param id task index to remove
     */
    TaskViewComponent.prototype.delete = function (id) {
        this.storage.delete(this.task.id);
        this.router.navigate(['/tasks']);
    };
    TaskViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-task-view',
            template: __webpack_require__(/*! ./task-view.component.html */ "./src/app/task-view/task-view.component.html"),
            styles: [__webpack_require__(/*! ./task-view.component.css */ "./src/app/task-view/task-view.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_task_storage_service__WEBPACK_IMPORTED_MODULE_2__["TaskStorageService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], TaskViewComponent);
    return TaskViewComponent;
}());



/***/ }),

/***/ "./src/app/todo/todo.component.css":
/*!*****************************************!*\
  !*** ./src/app/todo/todo.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RvZG8vdG9kby5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/todo/todo.component.html":
/*!******************************************!*\
  !*** ./src/app/todo/todo.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<button class=\"btn btn-success\" [routerLink]=\"['/tasks/add']\">New task</button>\r\n\r\n<div *ngIf=\"tasks && tasks.length > 0; else noTasks\">\r\n  <table class=\"table table-striped\">\r\n    <thead>\r\n    <tr>\r\n      <th>#</th>\r\n      <th>Task</th>\r\n      <th>Note</th>\r\n      <th></th>\r\n    </tr>\r\n    </thead>\r\n    <tbody *ngFor=\"let task of tasks\">\r\n    <tr>\r\n      <td>{{ task.id }}</td>\r\n      <td>{{ task.title }}</td>\r\n      <td>{{ task.note }}</td>\r\n      <td>\r\n        <button class=\"btn btn-light\" [routerLink]=\"['/tasks/', task.id]\"><i class=\"far fa-eye\"></i></button>\r\n        <button class=\"btn btn-light\" (click)=\"delete(task.id)\"><i class=\"far fa-trash-alt\"></i></button>\r\n        <button class=\"btn btn-light\" [routerLink]=\"['/tasks/', task.id, 'edit']\"><i class=\"far fa-edit\"></i></button>\r\n      </td>\r\n    </tr>\r\n    </tbody>\r\n  </table>\r\n</div>\r\n\r\n<ng-template #noTasks>\r\n  <h2>Congratulations, you finished your list ! </h2>\r\n</ng-template>\r\n"

/***/ }),

/***/ "./src/app/todo/todo.component.ts":
/*!****************************************!*\
  !*** ./src/app/todo/todo.component.ts ***!
  \****************************************/
/*! exports provided: TodoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoComponent", function() { return TodoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _task_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../task-storage.service */ "./src/app/task-storage.service.ts");



var TodoComponent = /** @class */ (function () {
    function TodoComponent(storage) {
        this.storage = storage;
    }
    /**
     * Load tasks on init
     */
    TodoComponent.prototype.ngOnInit = function () {
        this.storage.init();
        this.tasks = this.storage.getTasks();
    };
    /**
     * Remove the tasks from the list
     *
     * @param id task index to remove
     */
    TodoComponent.prototype.delete = function (id) {
        this.storage.delete(id);
        this.tasks = this.storage.getTasks();
    };
    TodoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-todo',
            template: __webpack_require__(/*! ./todo.component.html */ "./src/app/todo/todo.component.html"),
            styles: [__webpack_require__(/*! ./todo.component.css */ "./src/app/todo/todo.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_task_storage_service__WEBPACK_IMPORTED_MODULE_2__["TaskStorageService"]])
    ], TodoComponent);
    return TodoComponent;
}());



/***/ }),

/***/ "./src/assets/todo-list.json":
/*!***********************************!*\
  !*** ./src/assets/todo-list.json ***!
  \***********************************/
/*! exports provided: init_tasks, default */
/***/ (function(module) {

module.exports = {"init_tasks":[{"id":1,"title":"Mow lawn","note":"Should be done by 28 feb"},{"id":2,"title":"Wash car","note":"Use MkUiars Wax!"},{"id":3,"title":"Buy groceries","note":"Apples, bananas and some tomatoes."},{"id":4,"title":"Add validation","note":"No data validation is implemented in this app : fix this !"},{"id":5,"title":"Add tests","note":"Add some unit tests !"}]};

/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\Gaurav\O7Official\angular\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map