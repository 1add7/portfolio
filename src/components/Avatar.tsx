import { useState } from 'react'

type AvatarProps = {
  /** 照片文件名（如 'avatar.jpg'，放在 public/ 下）或完整 URL；留空则显示姓名首字 */
  src?: string
  initial: string
  name: string
}

export default function Avatar({ src, initial, name }: AvatarProps) {
  const [failed, setFailed] = useState(false)
  const resolved = src ? (src.startsWith('http') ? src : `${import.meta.env.BASE_URL}${src}`) : ''
  const showPhoto = Boolean(resolved) && !failed

  return (
    <div className="avatar">
      {showPhoto ? (
        <img src={resolved} alt={`${name} 的照片`} onError={() => setFailed(true)} />
      ) : (
        <span className="avatar-initial" aria-hidden="true">
          {initial}
        </span>
      )}
    </div>
  )
}
