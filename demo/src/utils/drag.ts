import { nextZIndex, ElPopper } from '@/utils/common'
import { useDialogStore } from '@/stores/dialog'

// src/directives/drag.ts
export default {
    mounted(el: HTMLElement, binding: any) {
      const value = binding.value
      const moveContainer = (value?.container && document.querySelector(value.container)) || document.querySelector('#map3dContainer') || document.body
      const selector = (value?.selector && el.querySelector(value.selector)) || el.querySelector('.drag-el') || el
  
      if (selector !== el) {
        selector.classList.add('ls-draggable')
      }
  
      selector.onmousedown = function (e: MouseEvent) {
        el.style.transition = 'none'
        const disx = e.clientX - el.offsetLeft
        const disy = e.clientY - el.offsetTop
        const mw = moveContainer.offsetWidth
        const mh = moveContainer.offsetHeight
        const ew = el.offsetWidth
        const eh = el.offsetHeight
  
        // 弹窗置顶
        if (el.style.zIndex !== '' + (ElPopper.zIndex - 1)) {
          el.style.zIndex = `${nextZIndex()}`
        }
  
        moveContainer.onmousemove = function (e: MouseEvent) {
          let left = e.clientX - disx
          let top = e.clientY - disy
          left = Math.max(0, Math.min(left, mw - ew))
          top = Math.max(0, Math.min(top, mh - eh))
          el.style.left = `${left}px`
          el.style.top = `${top}px`
        }
  
        moveContainer.onmouseup = function (e: MouseEvent) {
          const left = e.clientX - disx
          const top = e.clientY - disy
          moveContainer.onmousemove = moveContainer.onmouseup = null
          useDialogStore().setXY([left, top])
          el.style.transition = 'all 0.3s'
        }
      }
    }
  }
  