import h from '@h'
import * as s from '@pages/share'
import style from './style.css'

export default (page) =>
  <s.Main>
    <nav className={style.breadcrumb}>
      <s.Container>
        <ul className={style.breadcrumb__ul}>
          <li className={style.breadcrumb__home}><a className={style.breadcrumb__a} href='/'>Home</a></li>
          <li className={style.breadcrumb__separator}>•</li>
          <li className={style.breadcrumb__product}>Samsung Galaxy A30s 64GB Branco</li>
        </ul>
      </s.Container>
    </nav>
    <s.Container className={style.product}>
      <s.Image className={style.product__image} alt={page.title}>
        <source srcSet={page.image[0]} />
      </s.Image>
      <div className={style.product__div}>
        <h1 className={style.product__title}>{ page.title }</h1>
        <ul className={style.rating}>
          <li className={style.rating}><s.Icon>star--full</s.Icon></li>
          <li className={style.rating}><s.Icon>star--full</s.Icon></li>
          <li className={style.rating}><s.Icon>star--full</s.Icon></li>
          <li className={style.rating}><s.Icon>star--half</s.Icon></li>
          <li className={style.rating}><s.Icon>star</s.Icon></li>
        </ul>
        <data className={style.product__price} value='1599.00'>de R$ 1.599,00</data>
        <data className={style.product__salePrice} value='1329.05'>R$ <strong>1.329,05</strong></data>
        <p className={style.product__priceConditional}>
          à vista no boleto ou cartão (5% de desconto)<br />
          ou em até 10x de R$ 139,90 sem juros no cartão<br />
          total a prazo de R$ 1.399,00
        </p>
        <p className={style.product__description}>{ page.description }</p>
        <h2 className={style.product__color}>Cor</h2>
        <ul className={style.colors}>
          <li className={style.colors__white}>Branco</li>
        </ul>
        <h2 className={style.product__memory}>Memória</h2>
        <ul className={style.memory}>
          <li className={style.memory__64}>64 GB</li>
        </ul>
      </div>
    </s.Container>
  </s.Main>
