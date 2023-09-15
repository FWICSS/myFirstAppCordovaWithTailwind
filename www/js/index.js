/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

// Wait for the deviceready event before using any of Cordova's device APIs.
// See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready
document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    // Cordova is now initialized. Have fun!
    const deviceProperties = {
        Cordova: device.cordova,
        Model: device.model,
        Platform: device.platform,
        UUID: device.uuid,
        Version: device.version,
        Manufacturer: device.manufacturer,
        IsVirtual: device.isVirtual,
        Serial: device.serial,
        SDKVersion: device.sdkVersion // Pour Android seulement
    };

    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    // document.getElementById('deviceready').classList.add('ready');


    var text = document.getElementById('OnMobile').innerText = `Périphérique prêt`;


    var button = document.getElementById('butInfo');
    button.addEventListener('click', () => showInfoDevice(deviceProperties), false);

}

function showInfoDevice(deviceProperties) {

    var textInDiv = document.getElementById('infoDevice').innerText;


    if (textInDiv === "") {

        var text = "";
        for (const prop in deviceProperties) {
            if (deviceProperties.hasOwnProperty(prop) && deviceProperties[prop]) {
                text += `<div class="flex flex-col pb-3">`
                text += `<dt class="mb-1 text-gray-600 md:text-lg dark:text-gray-500">${prop} : </dt>`
                text += `<dd class="text-lg font-semibold">${deviceProperties[prop]} </dd>`
                text += `</div>`
            }
        }

        // text += '</ul>';

        document.getElementById('infoDevice').innerHTML = text;


    }
    else {
        var textInDiv = document.getElementById('infoDevice').innerText =  "";
    }
}

