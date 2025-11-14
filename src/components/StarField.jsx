import { useEffect, useRef } from 'react'
import './StarField.css'

function StarField() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let animationFrameId
    
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const stars = []
    const starCount = 200

    for (let i = 0; i < starCount; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1.5,
        vx: Math.random() * 0.5 - 0.25,
        vy: Math.random() * 0.5 - 0.25,
        alpha: Math.random()
      })
    }

    function drawStars() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      stars.forEach(star => {
        ctx.beginPath()
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255, 255, 255, ${star.alpha})`
        ctx.fill()

        star.x += star.vx
        star.y += star.vy

        if (star.x < 0 || star.x > canvas.width) star.vx = -star.vx
        if (star.y < 0 || star.y > canvas.height) star.vy = -star.vy

        star.alpha += (Math.random() - 0.5) * 0.02
        star.alpha = Math.max(0.3, Math.min(1, star.alpha))
      })

      animationFrameId = requestAnimationFrame(drawStars)
    }

    drawStars()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener('resize', handleResize)

    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return <canvas ref={canvasRef} className="star-field" />
}

export default StarField
