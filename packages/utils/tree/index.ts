

function arrayToTree<T>(arr: T[], opt = {
	IDField: 'id',
	pID: 'pid',
	childrenField: 'children'
}): T[] {
	const res: T[] = []
	if(!Array.isArray(arr)) return res
	const treeMap = {}
	arr.forEach(item => treeMap[item[opt.IDField]] = item)
	arr.forEach(item =>  {
		const parent = treeMap[item[opt.pID]]
		if(parent) {
			if (!Object.prototype.hasOwnProperty.call(parent, opt.childrenField)) parent[opt.childrenField] = []
			parent[opt.childrenField].push(item)
			parent.children.push(item)
		} else {
			res.push(item)
		}
	})
	return res
}

export default {
	arrayToTree
}
