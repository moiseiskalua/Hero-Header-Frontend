import * as S from './styles'
import CardActivity from '../../molecules/CardActivity';
import CardChart from '../../molecules/CardChart';
import HeroHeaderImage from '../../assets/hero-header-image.png'

const ProductStats = () => {
    return (
        <S.Container>
            <CardActivity />
            <CardChart/>
            <img src={HeroHeaderImage} alt="Uma mulher fazendo uma pesquisa" />
        </S.Container>
    )
}

export default ProductStats;