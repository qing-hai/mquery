//added by qinghai

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Mquery_ext_methods = ["all",
    "and",
    "box",
    "circle",
    "elemMatch",
    'eq',
    "equals",
    "exists",
    "geometry",
    "gt",
    "gte",
    "in",
    "intersects",
    "lt",
    "lte",
    "maxDistance",
    "mod",
    "ne",
    "nin",
    "nor",
    "near",
    "or",
    "polygon",
    "regex",
    "select",
    "project",
    "selected",
    "selectedInclusively",
    "selectedExclusively",
    "$size",
    "slice",
    "within",
    "where",
    "$where",
    "not",
    "type",
    //"text",
    "bitsAllSet", "bitsAnySet", "bitsAllClear", "bitsAnyClear",
    //add by qinghai, mongo3.6
    "expr",
];
var QueryBuilder = /** @class */ (function () {
    function QueryBuilder(mquery) {
        this.mquery = mquery;
        this._mquery = mquery();
    }
    QueryBuilder.prototype.build = function () {
        var rst = this._mquery._conditions;
        return rst;
    };
    QueryBuilder.prototype.reset = function () {
        this._mquery = this.mquery();
    };
    return QueryBuilder;
}());

Mquery_ext_methods.forEach(function (it) {
    QueryBuilder.prototype[it] = function () {
        var methodName = (it === "$size") ? "size" : it;
        this._mquery[methodName].apply(this._mquery, arguments);
        return this;
    };
});
function transformQuery(query) {
    if (query instanceof QueryBuilder) {
        return query.build();
    }
    else
        return query;
}

exports.QueryBuilder = QueryBuilder;
exports.transformQuery = transformQuery;
exports.Mquery_ext_methods=Mquery_ext_methods;
