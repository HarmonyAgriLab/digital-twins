// 引入 ElPopper
import { ElPopper } from 'element-plus';

// 如果 ElPopper 没有 nextZIndex 方法，可以考虑自己实现一个 zIndex 的递增逻辑
const nextZIndex = (): number => {
  // 如果 `ElPopper` 还存在 `nextZIndex` 方法，直接调用
  if (ElPopper && typeof ElPopper.nextZIndex === 'function') {
    return ElPopper.nextZIndex();
  }

  // 如果没有该方法，自己实现一个简单的 zIndex 生成逻辑
  return Math.floor(Math.random() * 1000) + 1000; // 示例：生成一个 1000 到 2000 之间的随机数
};

export { nextZIndex, ElPopper };
