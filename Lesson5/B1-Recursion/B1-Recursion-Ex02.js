function recursiveATOI(str, n) {
	if (str.match("/^[0-9]+$/") == false) {
		return 0;
	}
	var currDigit = str[n - 1] - "0";
	if (n == 1) {
		return currDigit;
	}
	var subproblem = recursiveATOI(str, n - 1);
	return 10 * subproblem + currDigit;
}

function loopATOI(str, n) {
	var output = 0;
	var currDigit = 0;
	for (let i = 0; i < n; i++) {
		currDigit = str[i] - "0";
		output = 10 * output + currDigit;
	}
	return output;
}

console.info("+----------------------------------------");

const STRING =
	"141592653589793238462643383279502884197169399375105820974944592307816406286208998628034825342117067982148086513282306647093844609550582231725359408128481117450284102701938521105559644622948954930381964428810975665933446128475648233786783165271201909145648566923460348610454326648213393607260249141273724587006606315588174881520920962829254091715364367892590360011330530548820466521384146951941511609433057270365759591953092186117381932611793105118548074462379962749567351885752724891227938183011949129833673362440656643086021394946395224737190785771342757789609173637178721468440901224953430146549585371050792279689258923542019956112129021960864034418159813629774771309960518707211349999998372978049951059731732816096318595024459455346908302642522308253344685035261931188171010003137838752886587533208381420617177669147303598253490428755468731159562863882353787593751957781857780532171226806613001927876611195909216420198938095257201";
const LEN = STRING.length;
const ITERS = 10000;
console.info("| Performance Comparison - Loop vs Recursion:");
console.info("|\tresults of running factorial of '" + STRING.substr(0, 4) + "...' (length = " + LEN + ") for " + ITERS + " times:");
var startTimestamp = Date.now();
for (let j = 0; j < ITERS; j++) {
	loopOutcome = loopATOI(STRING, LEN);
}
var endTimestamp = Date.now();
var elapsedTimeLoop = endTimestamp - startTimestamp;
console.log("|\tElapsed time for " + ITERS + " loopATOI('" + STRING.substr(0, 4) + "...') = " + elapsedTimeLoop + " ms");
var startTimestamp = Date.now();
for (let j = 0; j < ITERS; j++) {
	recursiveOutcome = recursiveATOI(STRING, LEN);
}
var endTimestamp = Date.now();
var elapsedTimeRecursion = endTimestamp - startTimestamp;
console.log("|\tElapsed time for " + ITERS + " recursiveATOI('" + STRING.substr(0, 4) + "...') = " + elapsedTimeRecursion + " ms");

/*
PI = 
3.141592653589793238462643383279502884197169399375105820974944592307816406286
208998628034825342117067982148086513282306647093844609550582231725359408128481 
117450284102701938521105559644622948954930381964428810975665933446128475648233 
786783165271201909145648566923460348610454326648213393607260249141273724587006 
606315588174881520920962829254091715364367892590360011330530548820466521384146 
951941511609433057270365759591953092186117381932611793105118548074462379962749 
567351885752724891227938183011949129833673362440656643086021394946395224737190 
702179860943702770539217176293176752384674818467669405132000568127145263560827 
785771342757789609173637178721468440901224953430146549585371050792279689258923 
542019956112129021960864034418159813629774771309960518707211349999998372978049 
951059731732816096318595024459455346908302642522308253344685035261931188171010 
003137838752886587533208381420617177669147303598253490428755468731159562863882 
353787593751957781857780532171226806613001927876611195909216420198938095257201 
065485863278865936153381827968230301952035301852968995773622599413891249721775 
283479131515574857242454150695950829533116861727855889075098381754637464939319 
255060400927701671139009848824012858361603563707660104710181942955596198946767 
837449448255379774726847104047534646208046684259069491293313677028989152104752 
162056966024058038150193511253382430035587640247496473263914199272604269922796 
782354781636009341721641219924586315030286182974555706749838505494588586926995 
690927210797509302955321165344987202755960236480665499119881834797753566369807 
426542527862551818417574672890977772793800081647060016145249192173217214772350 
141441973568548161361157352552133475741849468438523323907394143334547762416862 
518983569485562099219222184272550254256887671790494601653466804988627232791786 
085784383827967976681454100953883786360950680064225125205117392984896084128488 
626945604241965285022210661186306744278622039194945047123713786960956364371917 
287467764657573962413890865832645995813390478027590099465764078951269468398352 
595709825822620522489407726719478268482601476990902640136394437455305068203496 
252451749399651431429809190659250937221696461515709858387410597885959772975498 
930161753928468138268683868942774155991855925245953959431049972524680845987273 
644695848653836736222626099124608051243884390451244136549762780797715691435997 
700129616089441694868555848406353422072225828488648158456028506016842739452267 
467678895252138522549954666727823986456596116354886230577456498035593634568174 
324112515076069479451096596094025228879710893145669136867228748940560101503308 
617928680920874760917824938589009714909675985261365549781893129784821682998948 
722658804857564014270477555132379641451523746234364542858444795265867821051141 
354735739523113427166102135969536231442952484937187110145765403590279934403742 
007310578539062198387447808478489683321445713868751943506430218453191048481005 
370614680674919278191197939952061419663428754440643745123718192179998391015919 
561814675142691239748940907186494231961567945208095146550225231603881930142093 
762137855956638937787083039069792077346722182562599661501421503068038447734549 
202605414665925201497442850732518666002132434088190710486331734649651453905796 
268561005508106658796998163574736384052571459102897064140110971206280439039759 
515677157700420337869936007230558763176359421873125147120532928191826186125867 
321579198414848829164470609575270695722091756711672291098169091528017350671274 
858322287183520935396572512108357915136988209144421006751033467110314126711136 
990865851639831501970165151168517143765761835155650884909989859982387345528331 
635507647918535893226185489632132933089857064204675259070915481416549859461637 
180270981994309924488957571282890592323326097299712084433573265489382391193259 
746366730583604142813883032038249037589852437441702913276561809377344403070746 
921120191302033038019762110110044929321516084244485963766983895228684783123552 
658213144957685726243344189303968642624341077322697802807318915441101044682325 
271620105265227211166039666557309254711055785376346682065310989652691862056476 
931257058635662018558100729360659876486117910453348850346113657686753249441668 
039626579787718556084552965412665408530614344431858676975145661406800700237877 
*/
