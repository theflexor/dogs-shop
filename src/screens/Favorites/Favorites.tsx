import  { useEffect, useState } from 'react'
import { CardMain } from '@components/index'
import { favorites } from '@store/favorites/favoriteId'
import { FavoritesType,} from '@typess/types'
import './favorites.scss'
import { Typography, Empty, Col } from 'antd'

function Favorites() {
  const [announcement, setAnnouncement] = useState<FavoritesType[]>([])

  useEffect(() => {
    favorites().then((res) => {
      if (res) {
        setAnnouncement(res)
      }
    })
  }, [])

  console.log(announcement)

  return (
    <div className="favorites">
      <Typography.Title level={3}>Избранные</Typography.Title>
      <Col className='favorites__list'>
        {announcement && announcement[0]
          ? announcement.map(({ photos, announsment }) => (
              <CardMain
                type="main"
                key={announsment.slug}
                value={{ ...announsment, photos }}
              />
            ))
          : 
          <Empty description="Избранные отсутствуют" />
          }
      </Col>
    </div>
  )
}

export default Favorites
