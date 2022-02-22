import React, { useState } from 'react'
import FilterItems from './components/FilterItems'

interface FilterProps {
    handleFilterItems: Function
    contentFilters: {
        title: string
        items: []
    }[]
}

const Filter: React.FC<FilterProps> = ({
    handleFilterItems,
    contentFilters,
}): JSX.Element => {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)
    const [selectedItems, setSelectedItems] = useState<string[]>([])

    const isSelected = (name: string) =>
        selectedItems.includes(name)

    const handleSelect = (name: string) => {
        const selected: string = name
        if (!selectedItems.includes(selected)) {
            return setSelectedItems([...selectedItems, selected])
        }
        return setSelectedItems(
            [...selectedItems].filter((item) => item !== selected)
        )
    }
    const handleApply = (
        e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
    ) => {
        e.preventDefault()
        setIsMenuOpen(false)
        handleFilterItems(selectedItems)
    }

    const handleReset = (e: Event) => {
        e.preventDefault()
        setIsMenuOpen(false)
        setSelectedItems([])
        handleFilterItems([])
    }

    const filterProps = {
        isSelected,
        handleSelect,
        handleApply,
        isMenuOpen,
        contentFilters,
        handleReset,
    }

    return (
        <div className={`content-filter`}>
            <FilterItems {...filterProps} />
        </div>
    )
}
export default Filter
