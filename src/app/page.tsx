'use client'

import { BracketButton } from "@/components/ui/button"
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

export default function HomePage() {
  return (
    <>
      <div className="relative min-h-[calc(100vh-150px)] w-full flex flex-col">
        {/* 背景图片及渐变层 */}
        <div className="fixed inset-0 z-0 overflow-hidden">
          <img
            src="/cover/home.jpg"
            alt="background"
            className="h-full w-full object-cover"
            style={{ objectPosition: "center", filter: "brightness(1.1)" }}
          />
          <div className="absolute inset-0 bg-white/70 backdrop-blur-[2px]" />
        </div>

        {/* 主要内容区域 - 左右两栏布局 */}
        <div className="container relative z-10 py-12 header-font">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-11">
            {/* 左侧 */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-4 lg:col-start-2 flex items-center justify-center"
            >
              <div className="h-full max-w-md aspect-[3/4]">
                <img
                  src="/pic/book/牡丹亭封面.png"
                  alt="牡丹亭封面"
                  className="w-full h-full object-contain"
                  style={{ 
                    objectFit: 'contain', 
                    borderRadius: '20px',
                    filter: 'drop-shadow(0 0 20px rgba(255, 255, 255, 0.8))'
                  }}
                />
              </div>
            </motion.div>

            {/* 右侧：简介内容 */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-5 lg:col-start-6 space-y-8 px-4"
            >
              {/* 标题部分 */}
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl font-serif text-amber-800 title-font">牡丹亭还魂记</h1>
              </div>

              {/* 简介内容 */}
              <div className="prose prose-amber prose-xl max-w-none mt-2">
                <p className="text-xl font-semibold text-amber-700 font-light mb-2">
                  <strong>情不知所起，一往而深</strong>
                </p>
                <p className="text-gray-700 button-font">
                  《牡丹亭》是明代戏曲家汤显祖的传世名作，被誉为中国古典戏曲的巅峰。
                  全剧共五十五出，以“还魂”为主题，讲述了杜丽娘与柳梦梅至死不渝的爱情故事。
                </p>
                <p className="text-gray-700 mt-2">
                  作品以细腻的笔触描绘了青春少女的心路历程，体现了“情至”的美学思想，
                  表达了对自由爱情的追求和对封建礼教的反抗。
                </p>
              </div>

              {/* 主要特点 */}
              <div className="gap-8 mt-6">
                <div className="space-y-2">
                  <h3 className="header-font text-lg font-bold text-amber-700">
                    <span className="text-3xl font-semibold mr-1">戏</span>
                    <span className="text-xl tracking-wider">曲巅峰</span>
                  </h3>
                  <p className="indent-8 content-font text-gray-600 pl-1 leading-relaxed">
                    ——被誉为“临川四梦”之一，展现了汤显祖戏曲创作的最高成就
                  </p>
                </div>
                <div className="space-y-2 mt-4">
                  <h3 className="header-font text-lg font-bold text-amber-700">
                    <span className="text-3xl font-semibold mr-1">情</span>
                    <span className="text-xl tracking-wider">至之作</span>
                  </h3>
                  <p className="indent-8 content-font text-gray-600 pl-1 leading-relaxed">
                    ——以“情”为核心，展现了人性中最真挚纯粹的情感力量
                  </p>
                </div>
              </div>

              {/* 按钮组 */}
              <div className="flex flex-wrap gap-8">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <BracketButton
                    color="amber"
                    shape="octagon"
                    className="hover:bg-amber-50/10"
                    borderColor="#B65A52"
                    borderWidth={2}
                  >
                    <a 
                      href="https://www.shidianguji.com/book/7278557306407616512/chapter/7278557306407616512_1"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <a className="button-font text-xl font-bold">开始阅读</a>
                    </a>
                  </BracketButton>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <BracketButton
                    color="amber"
                    shape="octagon"
                    className="hover:bg-amber-50/10"
                    borderColor="#B65A52"
                    borderWidth={2}
                  >
                    {/* 点击跳转到overview/introduction页面 */}
                    <a href="/overview/introduction" className="button-font text-xl font-bold">
                      作品概览
                    </a>
                  </BracketButton>
                </motion.div>
              </div>
              
            </motion.div>
          </div>
        </div>
      </div>
    </>
  )
}


