import React from 'react';
import PropTypes from 'prop-types';
import Drawer from 'material-ui/Drawer';
import List, { ListItem, ListItemText } from 'material-ui/List';

export default function Nav({ categories, onClick }) {
  // 遷移先パスの生成
  //   - カテゴリIDが"1"の場合は /all
  //   - それ以外は /category/カテゴリID
  const to = category => (
    category.id === '1'
      ? '/all'
      : `/category/${category.id}`
  );
  
  // - Drawer, List、ListItem、ListItemTextで実装
  // - onClickでContainer Componentに各リンクの選択を通知
  return (
    <Drawer type="permanent">
      <List style={{ width: 240 }}>
        {categories.map(category => (
          <ListItem
            button
            key={`menu-item-${category.id}`}
            onClick={() => onClick(to(category))}
          >
            <ListItemText primary={category.name} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}
Nav.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired
    })
  ).isRequired,
  onClick: PropTypes.func.isRequired
};
