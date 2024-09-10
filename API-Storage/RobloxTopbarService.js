import { RandomTopbarID } from './Random.js';
import { version } from './Version.js';
import { throwNewError } from './Console.js';
import { topbarInsetDIV } from './ScreenAPI.js';
import { makeGoodSignal } from './GoodSignal.js';
import { makeStyleForRobloxTopbar } from './Styles.js';


let did = 0;
const ID2 = 'F9229D89DE'


const container = [];

export class RobloxTopbar {
    constructor(version) {
        this.version = version;
        this.topbarButtons = [];
    }

    load = function() {

    }

    addModernTopbarButton = function(name, unibarParent, toolTip) {
        try {
            if (!(name || typeof name == 'string')) {
                throw new Error(`arg #1 (string exspected, got ${typeof name})`)
                return
            }


            const [topbar, id] = topbarInsetDIV(ID2);

            
            const Module = {};



            if (!(document.getElementById('style-20dsysdiy27dsyhdsysdgsdu277ds77s87sd7ysdyds782789e'))) {
                makeStyleForRobloxTopbar(id);
            }

            const signalForSelected = makeGoodSignal();
            const signalForDeselected = makeGoodSignal();
            const signalForClick = makeGoodSignal();


            Module.selected = signalForSelected.signal;
            Module.deselected = signalForDeselected.signal;
            Module.click = signalForClick.signal;



            const robloxTriggerPoint = document.createElement('div');
            robloxTriggerPoint.innerHTML = name;
            robloxTriggerPoint.style.width = '44px';
            robloxTriggerPoint.style.height = '44px';
            robloxTriggerPoint.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
            robloxTriggerPoint.style.color = `rgb(255, 255, 255)`;
            robloxTriggerPoint.style.borderRadius = `100%`;
            robloxTriggerPoint.style.alignItems = 'center';
            robloxTriggerPoint.style.alignContent = 'center';
            robloxTriggerPoint.style.zIndex = 1001;


            const overlayButton = document.createElement('button');
            overlayButton.style.height = `100%`;
            overlayButton.style.width = `100%`;
            overlayButton.style.backgroundColor = `rgba(0, 0, 0, 0)`;
            overlayButton.textContent = '';
            overlayButton.style.alignItems = 'center';
            overlayButton.style.position = `relative`;

            if (did > 0 && !(name.includes('<svg'))) {
                overlayButton.style.top = `-40%`;
            } else {
                overlayButton.style.top = '-108%';
            }
            overlayButton.style.border = 'none';
            overlayButton.style.borderRadius = `100%`;
            overlayButton.style.cursor = `pointer`;


            overlayButton.addEventListener('click', function() {
                signalForClick.fireConnections();
                console.log('Should fired all Detectors for Click!')
            })


            function createTooltip(text) {
                if (!(overlayButton.querySelector('#ToolTip'))) {
                    return `
                    <svg id="Tooltip-caret" width="16" height="8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 8" style="transform: rotate(0deg); top: 103%; position: relative;">
                        <!-- Caret shape -->
                        <polygon points="0,8 8,0 16,8" fill="rgb(101, 102, 104)"/>
                    </svg>
                    <div id="ToolTip" style='right: 4px; bottom: 7px; height: auto; width: 101px; max-width: 101px; background-color: rgb(101, 102, 104); border-radius: 8px; color: rgb(255, 255, 255); font-family: "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; align-items: center; top: 95%; position: relative; display: flex; flex-wrap: wrap; word-wrap: break-word; font-size: 16px;'>${text || 'No tool TIP!'}</div>`
                } else {
                    return '';
                }
            }


            function removeTooltip() {
                const tooltip = overlayButton.querySelector('#ToolTip');
                const tooltipCaret = overlayButton.querySelector('#Tooltip-caret');

                if (tooltip) {
                    tooltip.remove();
                    tooltipCaret.remove();
                }
            }


            const enterThen = robloxTriggerPoint.querySelector('#Index #ChangeMiddle');

        

            overlayButton.addEventListener('mouseenter', function() {
                robloxTriggerPoint.style.backgroundColor = `rgba(0, 0, 0, 0.7)`;

                if (enterThen) {
                    console.log(enterThen.style.fill)
                    enterThen.style.fill = `rgba(0, 0, 0, 0.7)`;
                }
            });
            overlayButton.addEventListener('mouseout', function() {
                robloxTriggerPoint.style.backgroundColor = `rgba(0, 0, 0, 0.8)`;

                if (enterThen) {
                    enterThen.style.fill = `rgba(0, 0, 0, 0.8)`;
                }
            });


            overlayButton.addEventListener('mouseover', function() {
                overlayButton.innerHTML += createTooltip(toolTip);
            })

            overlayButton.addEventListener('mouseout', function() {
                removeTooltip();
            })



            if (unibarParent) {
                unibarParent.appendChild(robloxTriggerPoint)
            } else {
                topbar.appendChild(robloxTriggerPoint);
            }

            // topbar.appendChild(robloxTriggerPoint);
            robloxTriggerPoint.appendChild(overlayButton);


            did++;

            return Module;
        } catch (error) {
            throwNewError(error.message)
        }
    }


    addModernTopbarUnibar = function() {
        try {
            const [topbar, ID] = topbarInsetDIV(ID2);
            const add = this.addModernTopbarButton;

            const Module = {}


            
            const topbarUnibarSetup = document.createElement('div');
            topbarUnibarSetup.style.backgroundColor = `rgba(0, 0, 0, 0.8)`;
            topbarUnibarSetup.style.height = `44px`;
            topbarUnibarSetup.style.width = `44px`;
            topbarUnibarSetup.style.borderRadius = `32px`;
            topbarUnibarSetup.style.zIndex = 1001;
            topbarUnibarSetup.style.display = 'flex';
            topbarUnibarSetup.style.gap = `10px`;
            

            const exspandCollapseButton = document.createElement('div');
            exspandCollapseButton.style.backgroundColor = `rgb(0, 0, 0, 0)`;
            exspandCollapseButton.style.height = `33px`;
            exspandCollapseButton.style.width = `33px`;
            exspandCollapseButton.style.cursor = `pointer`;
            exspandCollapseButton.style.position = `relative`;
            exspandCollapseButton.style.left = `12.5%`;
            exspandCollapseButton.style.top = `12.5%`;
            exspandCollapseButton.style.borderRadius = `100%`;
            exspandCollapseButton.style.opacity = `1`;
            exspandCollapseButton.innerHTML = `<svg width="33" height="33" viewBox="0 0 33 33"><circle cx="8.5" cy="16.5" r="2.5" fill="white" /><circle cx="16.5" cy="16.5" r="2.5" fill="white" /><circle cx="24.5" cy="16.5" r="2.5" fill="white" /></svg>`
            exspandCollapseButton.setAttribute('toggle', 'false');
            exspandCollapseButton.style.zIndex = 1002;


            const buttonContainer = document.createElement('div');
            buttonContainer.style.width = `auto`;
            buttonContainer.style.height = `44px`;
            buttonContainer.style.display = `flex`;
            buttonContainer.style.gap = `11px`;
            buttonContainer.style.visibility = `hidden`;




            function createTooltip(text) {
                console.log('adding')
                if (!(topbarUnibarSetup.querySelector('#ToolTip'))) {
                    console.log('Adding tooltip lair')
                    return `
                    <svg id="Tooltip-caret" width="16" height="8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 8" style="transform: rotate(0deg); top: 103%; position: relative;">
                        <!-- Caret shape -->
                        <polygon points="0,8 8,0 16,8" fill="rgb(101, 102, 104)"/>
                    </svg>
                    <div id="ToolTip" style='right: 4px; bottom: 7px; height: auto; width: 101px; max-width: 101px; background-color: rgb(101, 102, 104); border-radius: 8px; color: rgb(255, 255, 255); font-family: "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; align-items: center; top: 95%; position: relative; display: flex; flex-wrap: wrap; word-wrap: break-word; font-size: 16px;'>${text || 'No tool TIP!'}</div>`
                } else {
                    return '';
                }
            }


            function removeTooltip() {
                console.log('removing')
                const tooltip = topbarUnibarSetup.querySelector('#ToolTip');
                const tooltipCaret = topbarUnibarSetup.querySelector('#Tooltip-caret');

                if (tooltip) {
                    tooltip.remove();
                    tooltipCaret.remove();
                }
            }


            exspandCollapseButton.addEventListener('mouseleave', function() {
                console.log('mouse is out!')
            })



            exspandCollapseButton.addEventListener('mouseenter', function() {
                if (exspandCollapseButton.getAttribute('toggle') === 'false') {
                    exspandCollapseButton.style.backgroundColor = `rgba(255, 255, 255, 0.1)`;
                }

                console.log('hovering!')
            })

            exspandCollapseButton.addEventListener('mouseleave', function() {
                if (exspandCollapseButton.getAttribute('toggle') === 'false') {
                    exspandCollapseButton.style.backgroundColor = `rgba(0, 0, 0, 0)`;
                }

                console.log('removing tooltip!')
            })





            exspandCollapseButton.addEventListener('click', function() {
                console.log('Clicked!')
                if (exspandCollapseButton.getAttribute('toggle') === 'false') {
                    exspandCollapseButton.setAttribute('toggle', 'true');

                    exspandCollapseButton.style.backgroundColor = `rgba(255, 255, 255, 0.1)`;
                    exspandCollapseButton.innerHTML = `<svg width="33" height="33" viewBox="0 0 33 33"><rect x="8.5" y="15.5" width="16" height="2" fill="white" rx="1" ry="1" transform="rotate(45 16.5 16.5)" /><rect x="8.5" y="15.5" width="16" height="2" fill="white" rx="1" ry="1" transform="rotate(-45 16.5 16.5)" /></svg>`;


                    if (buttonContainer.children.length > 0) {
                        topbarUnibarSetup.style.width = `auto`;
                    } else {
                        topbarUnibarSetup.style.width = `44px`;
                    }


                    exspandCollapseButton.style.left = `6.5%`;
                    buttonContainer.style.visibility = `unset`;
                } else {
                    exspandCollapseButton.setAttribute('toggle', 'false');

                    exspandCollapseButton.style.backgroundColor = `rgba(0, 0, 0, 0)`;
                    exspandCollapseButton.innerHTML = `<svg width="33" height="33" viewBox="0 0 33 33"><circle cx="8.5" cy="16.5" r="2.5" fill="white" /><circle cx="16.5" cy="16.5" r="2.5" fill="white" /><circle cx="24.5" cy="16.5" r="2.5" fill="white" /></svg>`;
                    topbarUnibarSetup.style.width = `44px`;


                    exspandCollapseButton.style.left = `12.5%`;
                    buttonContainer.style.visibility = `hidden`;
                }
            })



            Module.addButton = function(name) {
                const Button = document.createElement('div');


                Button.style.height = `33px`;
                Button.style.width = `33px`;
                Button.style.backgroundColor = `rgba(0, 0, 0, 0)`;
                Button.style.cursor = `pointer`;
                Button.style.color = `rgb(255, 255, 255)`;
                Button.style.borderRadius = `100%`;
                Button.innerHTML = name;


                Button.addEventListener('mouseenter', function() {
                    Button.style.backgroundColor = `rgba(255, 255, 255, 0.1)`;
                })

                Button.addEventListener('mouseleave', function() {
                    Button.style.backgroundColor = `rgba(0, 0, 0, 0)`;
                })


                buttonContainer.appendChild(Button)
            }


            Module.addButton('GG')



            topbar.appendChild(topbarUnibarSetup)
            topbarUnibarSetup.appendChild(exspandCollapseButton)
            topbarUnibarSetup.appendChild(buttonContainer);


            return Module
        } catch (error) {
            throwNewError(error.message)
        }
    }
}