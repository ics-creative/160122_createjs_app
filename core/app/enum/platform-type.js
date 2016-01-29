System.register([], function(exports_1) {
    "use strict";
    var PlatformType;
    return {
        setters:[],
        execute: function() {
            (function (PlatformType) {
                PlatformType[PlatformType["Browser"] = 0] = "Browser";
                PlatformType[PlatformType["Desktop"] = 1] = "Desktop";
                PlatformType[PlatformType["Mobile"] = 2] = "Mobile";
            })(PlatformType || (PlatformType = {}));
            exports_1("PlatformType", PlatformType);
        }
    }
});
//# sourceMappingURL=platform-type.js.map