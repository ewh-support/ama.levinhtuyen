jQuery(document).ready(function($){interact('.draggable').draggable({inertia:true,restrict:{restriction:"self",endOnly:true,elementRect:{top:0,left:0,bottom:1,right:1}},autoScroll:true,onmove:dragMoveListener,onend:function(event){var textEl=event.target.querySelector('p');textEl&&(textEl.textContent='moved a distance of '+(Math.sqrt(event.dx*event.dx+event.dy*event.dy)|0)+'px');},});function dragMoveListener(event){var target=event.target,x=(parseFloat(target.getAttribute('data-x'))||0)+event.dx,y=(parseFloat(target.getAttribute('data-y'))||0)+event.dy;target.style.webkitTransform=target.style.transform='translate('+x+'px, '+y+'px)';target.setAttribute('data-x',x);target.setAttribute('data-y',y);}window.dragMoveListener=dragMoveListener;interact('.dropzone').dropzone({accept:'.accept-drop',overlap:0.75,ondropactivate:function(event){event.target.classList.add('drop-active');},ondragenter:function(event){var draggableElement=event.relatedTarget,dropzoneElement=event.target;dropzoneElement.classList.add('drop-target');draggableElement.classList.add('can-drop');},ondragleave:function(event){event.target.classList.remove('drop-target');event.relatedTarget.classList.remove('can-drop');},ondrop:function(event){var draggableElement=event.relatedTarget;var dropzoneElement=event.target;$(dropzoneElement).val(draggableElement.textContent);$(dropzoneElement).addClass('dropped-input');$(dropzoneElement).removeClass('dropzone');$(draggableElement).remove();},ondropdeactivate:function(event){event.target.classList.remove('drop-active');event.target.classList.remove('drop-target');}});$('#form-free-test .button-next input').click(function(){$('#form-free-test .session-question').removeClass('active');var next=$(this).attr('data-value');$('#form-free-test .'+next).addClass('active');});});