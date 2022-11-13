interface PostDataStructure {
  recipe_id: number
  recipe_title: string
  cooking_imageURL: string
  ingredients: [
    {
      ingredient: string
      quantity: string
      unit: string
    },
  ]
  howto_cook: [
    {
      howto_text: string
    },
  ]
  description: string
}

export const postDataStructure: PostDataStructure = {
  recipe_id: NaN,
  recipe_title: '',
  cooking_imageURL: '',
  ingredients: [
    {
      ingredient: '',
      quantity: '',
      unit: ''
    },
  ],
  howto_cook: [
    {
      howto_text: ''
    },
  ],
  description: ''
}
