

const bodyContainer =  document.querySelector('.bodyContainer');
const button = document.querySelector('.btn');


button.addEventListener('click',()=>{
    if (!(bodyContainer.querySelector('.panelBox'))){
        bodyContainer.classList.add('bodyContainerClicked');
        button.classList.add('btnClicked');


        const panelBox = document.createElement('div');
        panelBox.classList.add('panelBox');

        const listPanel =document.createElement('div');
        listPanel.classList.add('listPanel');
        
        const taskPanel = document.createElement('div');
        taskPanel.classList.add('taskPanel');

        panelBox.appendChild(taskPanel);
        panelBox.appendChild(listPanel);
        bodyContainer.appendChild(panelBox);
        }
    
})