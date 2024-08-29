import { useDispatch, useSelector} from 'react-redux'
import { 
    NavTabNames,
    selectCurrentNavTabName,
    setCurrentNavIndexWithTabName,
} from './navigationSlice.js'
import Nav from 'react-bootstrap/Nav'

export default function NavTabs(props) {

    const dispatch = useDispatch()

    const currentNavTabName = useSelector(selectCurrentNavTabName)

    const getNavItems = () => {
        return NavTabNames.TAB_NAMES.map(tabName => {
            return (
                <Nav.Item key={tabName}>
                    <Nav.Link eventKey={tabName}>{tabName}</Nav.Link>
                </Nav.Item>
            )
        })
    }

    const onSelect = (selectedKey) => {
        dispatch(setCurrentNavIndexWithTabName(selectedKey))
        const idx = NavTabNames.getIndexWithTabName(selectedKey)
        if (props.onSelect) props.onSelect(idx)
    }

    return (
        <Nav 
            variant="tabs"
            activeKey={currentNavTabName}
            onSelect={onSelect}
            defaultActiveKey={NavTabNames.TAB_NAMES[0]}
        >
            {getNavItems()}
        </Nav>
    );
}
