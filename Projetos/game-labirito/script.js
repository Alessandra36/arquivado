function rand(max) {
	return Math.floor(Math.random() * max);
}

// 这个函数用于打乱数组a的顺序。它使用了Fisher-Yates算法，也被称为Knuth洗牌算法
function shuffle(a) {
	for (let i = a.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[a[i], a[j]] = [a[j], a[i]];
	}
	return a;
}

// 这个函数用于改变图像的亮度。
function changeBrightness(factor, sprite) {
	var virtCanvas = document.createElement("canvas");
	virtCanvas.width = 500;
	virtCanvas.height = 500;
	var context = virtCanvas.getContext("2d");
	context.drawImage(sprite, 0, 0, 500, 500);

	var imgData = context.getImageData(0, 0, 500, 500);

	for (let i = 0; i < imgData.data.length; i += 4) {
		imgData.data[i] = imgData.data[i] * factor;
		imgData.data[i + 1] = imgData.data[i + 1] * factor;
		imgData.data[i + 2] = imgData.data[i + 2] * factor;
	}
	context.putImageData(imgData, 0, 0);

	var spriteOutput = new Image();
	spriteOutput.src = virtCanvas.toDataURL();
	virtCanvas.remove();
	return spriteOutput;
}

function toggleVisablity(id) {
	if (document.getElementById(id).style.visibility == "visible") {
		document.getElementById(id).style.visibility = "hidden";
	} else {
		document.getElementById(id).style.visibility = "visible";
	}
}

// ------------------------------------------------------------------ 生成一个迷宫
function Maze(Width, Height) {
	var mazeMap; // 用于存储迷宫的地图
	var width = Width;
	var height = Height;
	var startCoord, endCoord; // 迷宫的起点和终点坐标
	var dirs = ["n", "s", "e", "w"]; // 四个方向的数组
	var modDir = {
		// 一个对象，用于根据方向修改坐标
		n: {
			y: -1,
			x: 0,
			o: "s",
		},
		s: {
			y: 1,
			x: 0,
			o: "n",
		},
		e: {
			y: 0,
			x: 1,
			o: "w",
		},
		w: {
			y: 0,
			x: -1,
			o: "e",
		},
	};

	this.map = function () {
		return mazeMap;
	};
	this.startCoord = function () {
		return startCoord;
	};
	this.endCoord = function () {
		return endCoord;
	};

	// 生成迷宫的地图
	function genMap() {
		mazeMap = new Array(height);
		for (y = 0; y < height; y++) {
			mazeMap[y] = new Array(width);
			for (x = 0; x < width; ++x) {
				mazeMap[y][x] = {
					n: false,
					s: false,
					e: false,
					w: false, // 四个方向的墙
					visited: false, // 是否被访问过
					priorPos: null, // 前一个位置
				};
			}
		}
	}

	// 定义迷宫的路径
	function defineMaze() {
		var isComp = false;
		var move = false;
		var cellsVisited = 1;
		var numLoops = 0;
		var maxLoops = 0;
		var pos = {
			x: 0,
			y: 0,
		};
		var numCells = width * height;
		while (!isComp) {
			move = false;
			mazeMap[pos.x][pos.y].visited = true;

			if (numLoops >= maxLoops) {
				shuffle(dirs);
				maxLoops = Math.round(rand(height / 8));
				numLoops = 0;
			}
			numLoops++;
			for (index = 0; index < dirs.length; index++) {
				var direction = dirs[index];
				var nx = pos.x + modDir[direction].x;
				var ny = pos.y + modDir[direction].y;

				if (nx >= 0 && nx < width && ny >= 0 && ny < height) {
					//Check if the tile is already visited
					if (!mazeMap[nx][ny].visited) {
						//Carve through walls from this tile to next
						mazeMap[pos.x][pos.y][direction] = true;
						mazeMap[nx][ny][modDir[direction].o] = true;

						//Set Currentcell as next cells Prior visited
						mazeMap[nx][ny].priorPos = pos;
						//Update Cell position to newly visited location
						pos = {
							x: nx,
							y: ny,
						};
						cellsVisited++;
						//Recursively call this method on the next tile
						move = true;
						break;
					}
				}
			}