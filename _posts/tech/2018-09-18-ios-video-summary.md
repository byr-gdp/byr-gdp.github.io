---
layout: post
title: iOS video 标签小结
category: 技术
tags: video, html5, ios
description: ios video 标签小结

---

这里只关注两个点：如何实现自动播放以及播放不自动全屏。

添加 `autoplay` 属性，但是 iOS 有若干注意事项。

- 视频需要没有音轨，或者设置 `muted`。
- iOS 需要设置 `playsinline`（如果不设置，播放将会自动进入全屏，同时自动播放在 iOS 11 测试不生效）。
- 在非省电模式下。
- 需要出现在视口中，且可见。

  - `display: none` 和 `visibility: hidden` 均不会播放。
  - `opacity: 0` 可以播放。

另外，通过先 muted 再取消 muted 也不一定可靠。除非取消行为是用户行为(user gesture)，即通过定时器脚本获取视频播放后再取消 muted 是无效的。

因此，自动播放视频通常可以用于 GIF 的场景，切比用 IMG 会获得更好的性能。GIF 是 H.264 视频体积大小的 12 倍，在浏览器中的加载和播放要消耗 2 倍的电量。但同样存在性能缺陷，比如视频内容预加载。

最后，在 Safari 12 可以使用 `<img>` 来加载 mp4 文件解决之前存在的问题。

## 参考

- [New `<video>` Policies for iOS](https://webkit.org/blog/6784/new-video-policies-for-ios/)
- [Evolution of <img>: Gif without the GIF](https://calendar.perfplanet.com/2017/animated-gif-without-the-gif/#-but-we-already-have-video-tags)