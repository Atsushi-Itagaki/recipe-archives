import React from 'react'
import SelectCookingPicture from './recipe-form__parts/SelectCookingPicture'

const RecipeForm: React.FC = (): JSX.Element => {
  return (
    <section className="recipe-form">
      <form action="" method="POST" encType="">
        <table>
          <tbody>
            <tr>
              <td>
                <SelectCookingPicture />
              </td>
            </tr>
            <tr>

            </tr>
          </tbody>
        </table>
      </form>
    </section>
  )
}

export default RecipeForm