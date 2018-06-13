$(function () {

    console.log("init project");

    function initTab() {
        $('#myTabs a[href="#lossItem"]').tab('show')
    }

    function initLossItemTable() {
        //$.getJSON("app/lossItems.json", "", function (data) {
        $.getJSON("500part.json", "", function (data) {
            //console.log(data);
            //Logger.info(data);
            var seq = 0;
            /*var html = [];
            _.forEach(data, function (value) {
                seq++;
                //Logger.info("value:" + JSON.stringify(value));
                /!*$("#lossItemTable tbody").append('<tr><td>' + value.operate + '</td><td>' + value.name + '</td><td>' + value.code + '</td><td>' + value.channel + '</td>' +
                 '<td>' + value.price + '</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>');*!/
                $("#lossItemTable tbody").append("'<tr><td><img src='img/itemPassIco.png'/><img src='img/itemRejectIco.png'/></td>" +
                    "<td><a>100</a></td>" +
                    "<td>" + seq + "</td>" +
                    "<td>换件</td>" +
                    "<td>" + value.itemName + "</td>" +
                    "<td>" + value.partNo + "</td>" +
                    "<td>同质价</td>" +
                    "<td>拆装</td>" +
                    "<td><input style='width:20px'/></td>" +
                    "<td><input style='width:20px'/></td>" +
                    "<td>" + value.partFeeAfterDiscount + "</td>" +
                    "<td>200</td>" +
                    "<td><input style='width:20px'/></td>" +
                    "<td>200</td>" +
                    "<td><input style='width:20px'/></td>" +
                    "<td>200</td>" +
                    "<td><input style='width:20px'/></td>" +
                    "<td>200</td>" +
                    "<td><input type='checkbox'/></td>" +
                    "<td><input type='checkbox'/></td>" +
                    "<td><select>请选择</select></td>" +
                    "<td>xxx</td>" +
                    "<td><select>请选择</select></td>" +
                    "<td>" + value.salvage + "</td>" +
                    "<td><input type='checkbox'/></td>" +
                    "<td><a>操作</a></td>" +
                    "</tr>");
            });*/
            var html = [];
            _.forEach(data, function (value) {
                seq++;
                //Logger.info("value:" + JSON.stringify(value));
                /*$("#lossItemTable tbody").append('<tr><td>' + value.operate + '</td><td>' + value.name + '</td><td>' + value.code + '</td><td>' + value.channel + '</td>' +
                 '<td>' + value.price + '</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>');*/
                html.push(
                    "'<tr><td><img src='img/itemPassIco.png'/><img src='img/itemRejectIco.png'/></td>" +
                    "<td><a>100</a></td>" +
                    "<td>" + seq + "</td>" +
                    "<td>换件</td>" +
                    "<td>" + value.itemName + "</td>" +
                    "<td>" + value.partNo + "</td>" +
                    "<td>同质价</td>" +
                    "<td>拆装</td>" +
                    "<td><input style='width:20px'/></td>" +
                    "<td><input style='width:20px'/></td>" +
                    "<td>" + value.partFeeAfterDiscount + "</td>" +
                    "<td>200</td>" +
                    "<td><input style='width:20px'/></td>" +
                    "<td>200</td>" +
                    "<td><input style='width:20px'/></td>" +
                    "<td>200</td>" +
                    "<td><input style='width:20px'/></td>" +
                    "<td>200</td>" +
                    "<td><input type='checkbox'/></td>" +
                    "<td><input type='checkbox'/></td>" +
                    "<td><select><option>请选择</option></select></td>" +
                    "<td>xxx</td>" +
                    "<td><select><option>请选择</option></select></td>" +
                    "<td>" + value.salvage + "</td>" +
                    "<td><input type='checkbox'/></td>" +
                    "<td><a>操作</a></td>" +
                    "</tr>"
                );
            });
            $("#lossItemTable tbody").append(html.join(''));
        });

    }
    initTab();
    initLossItemTable();
});
