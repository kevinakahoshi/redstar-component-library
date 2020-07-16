import React from 'react';

const LinkList = ({ linkList }) => linkList.map((link, index) => (
  <a
    key={index}
    className="nav-link"
    href={link.href}>
    {link.text}
  </a>
));

export default LinkList;
