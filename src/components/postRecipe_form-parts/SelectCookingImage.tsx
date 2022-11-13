import React, { FC, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faRepeat, IconDefinition } from '@fortawesome/free-solid-svg-icons'
import { postDataStructure } from './modules/postDataStructure'

const SelectCookingPicture: FC = () => {
  const [imgSrc, setImgSrc] = useState<string>("")
  const [icon, setIcon] = useState<IconDefinition>(faPlus)
  const [style, setStyle] = useState<React.CSSProperties>({ display: "none" })
  
  const handleSelectImage = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const files: FileList = e.target.files as FileList

    Object.values(files).map((file) => {
      const fileReader = new FileReader();

      fileReader.readAsDataURL(file)
      fileReader.onload = () => {
        const dataURL: string = fileReader.result as string

        setImgSrc(dataURL)
        postDataStructure.cooking_imageURL = dataURL
      }
    })

    setIcon(faRepeat)
    setStyle({ display: "block" })
  }

  return (
    <div className="input__field__item selectCookingImage">
      <label htmlFor="imageSelector" className="selectCookingImage__input__view">
        <FontAwesomeIcon
          icon={icon}
          className="selectCookingImage__input_icon_add"
        />
        <img
          src={imgSrc}
          style={style}
          className="selectCookingImage__selected_Image"
          alt="料理の写真"
        />
        <input
          type="file"
          accept="image/png, image/jpeg, image/svg"
          name=""
          id="imageSelector"
          style={{ display: "none" }}
          onChange={(e) => handleSelectImage(e)}
          multiple
        />
      </label>
    </div>
  )
}

export default SelectCookingPicture